import { useContext, useEffect, useState, useRef } from "react";
import { refContext } from "../Context/refContext";
import { MathUtils, Quaternion, Vector3 } from "three";
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { xanderBodyRef } from "../Personajes/Xander";
import { useAtom } from "jotai";
import * as THREE from 'three'; // Importa la biblioteca three.js


const Controls = () => {
    const { xanderRef, playAnimationWithDuration, playAnimation, stopAnimation, animationInProcess } = useContext(refContext)
    const [KeysPressing, setKeyPressing] = useState(new Set());
    const [bodyRef, setBodyRef] = useAtom(xanderBodyRef);
    const velocidadMovimiento = 0.02; // Se puede ajustar


    useFrame((state, delta) => {
        if (xanderRef.current && bodyRef) {
            if (KeysPressing.size > 0) {
                // Realiza acciones mientras al menos una tecla está presionada
                if (KeysPressing.has('w') && KeysPressing.has('s')) { // w + s
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('w')) { // w

                    // Calcula el vector de dirección hacia adelante basado en la orientación
                    const forwardVector = new THREE.Vector3(0, 0, 1).applyQuaternion(bodyRef.current.rotation());
                    // Normaliza el vector de dirección
                    forwardVector.normalize();
                    // Calcula el desplazamiento basado en la velocidad de movimiento
                    const desplazamiento = forwardVector.clone().multiplyScalar(velocidadMovimiento);

                    bodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                    bodyRef.current.setTranslation({
                        x: bodyRef.current.translation().x + desplazamiento.x,
                        y: bodyRef.current.translation().y + desplazamiento.y,
                        z: bodyRef.current.translation().z + desplazamiento.z
                    }, true)

                    playAnimation('Walking', 'Xander')
                } else if (KeysPressing.has('s')) {// s
                    // Calcula el vector de dirección hacia adelante basado en la orientación
                    const forwardVector = new THREE.Vector3(0, 0, -1).applyQuaternion(bodyRef.current.rotation());
                    // Normaliza el vector de dirección
                    forwardVector.normalize();
                    // Calcula el desplazamiento basado en la velocidad de movimiento
                    const desplazamiento = forwardVector.clone().multiplyScalar(velocidadMovimiento - 0.005);
                    bodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                    bodyRef.current.setTranslation({
                        x: bodyRef.current.translation().x + desplazamiento.x,
                        y: bodyRef.current.translation().y + desplazamiento.y,
                        z: bodyRef.current.translation().z + desplazamiento.z
                    }, true)
                    playAnimation("Walking Backwards", 'Xander')
                }

                if (KeysPressing.has('a') && KeysPressing.size == 1) {// a
                    bodyRef.current.setAngvel({ x: 0, y: 2.5, z: 0 }, true);
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('a') && KeysPressing.size > 1) {
                    bodyRef.current.setAngvel({ x: 0, y: 2.5, z: 0 }, true);
                }

                if (KeysPressing.has('d') && KeysPressing.size == 1) {// s
                    bodyRef.current.setAngvel({ x: 0, y: -2.5, z: 0 }, true);
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('d') && KeysPressing.size > 1) {
                    bodyRef.current.setAngvel({ x: 0, y: -2.5, z: 0 }, true);
                }
            } else {
                bodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                if (animationInProcess) {
                } else {
                    playAnimation('Idle', 'Xander')
                }
            }
        }
    })

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key == 'w' || event.key == 'a' || event.key == 's' || event.key == 'd') {
                setKeyPressing(prevKeys => new Set([...prevKeys, event.key]));
            }
        };

        const handleKeyUp = (event) => {
            setKeyPressing(prevKeys => {
                const newKeys = new Set(prevKeys);
                newKeys.delete(event.key);
                return newKeys;
            });

        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
}

export default Controls;