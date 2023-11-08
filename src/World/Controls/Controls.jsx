import { useContext, useEffect, useState, useRef } from "react";
import { characterContext } from "../Context/characterContext";
import { useFrame } from '@react-three/fiber'
//import { xanderBodyRef } from "../Personajes/Xander";
//import { useAtom } from "jotai";
import * as THREE from 'three'; // Importa la biblioteca three.js


const Controls = () => {
    const { xanderRef, playAnimationWithDuration, playAnimation, stopAnimation, animationInProcess, xanderBodyRef } = useContext(characterContext)
    const [KeysPressing, setKeyPressing] = useState(new Set());
    //const [bodyRef, setBodyRef] = useAtom(xanderBodyRef);
    const velocidadMovimiento = 0.02; // Se puede ajustar

    const walkingFront = (positive) => {
        let forwardVector = 0
        let walkingback = 0
        if(positive){
            forwardVector = new THREE.Vector3(0, 0, 1).applyQuaternion(xanderRef.current.quaternion);
        }else{
            forwardVector = new THREE.Vector3(0, 0, -1).applyQuaternion(xanderRef.current.quaternion);
            walkingback = 0.005
        }
        forwardVector.normalize();

        // Calcula el desplazamiento basado en la velocidad de movimiento
        return forwardVector.clone().multiplyScalar(velocidadMovimiento - walkingback);
    }
    useFrame((state, delta) => {
        if (xanderRef.current && xanderBodyRef.current) {

            if (KeysPressing.size > 0) {
                // Realiza acciones mientras al menos una tecla está presionada
                if (KeysPressing.has('w') && KeysPressing.has('s')) { // w + s
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('w')) { // w
                    const desplazamiento = walkingFront(true)
                    xanderBodyRef.current.setTranslation({
                        x: xanderBodyRef.current.translation().x + desplazamiento.x,
                        y: xanderBodyRef.current.translation().y + desplazamiento.y,
                        z: xanderBodyRef.current.translation().z + desplazamiento.z
                    }, true)
                    playAnimation('Walking', 'Xander')
                } else if (KeysPressing.has('s')) {// s
                    const desplazamiento = walkingFront(false)
                    xanderBodyRef.current.setTranslation({
                        x: xanderBodyRef.current.translation().x + desplazamiento.x,
                        y: xanderBodyRef.current.translation().y + desplazamiento.y,
                        z: xanderBodyRef.current.translation().z + desplazamiento.z
                    }, true)
                    playAnimation("Walking Backwards", 'Xander')
                }
                if (KeysPressing.has('a')) {// a
                    xanderRef.current.rotation.y += 0.02

                    if(KeysPressing.size == 1){
                        playAnimation('Idle', 'Xander')
                    }
                }
                if (KeysPressing.has('d') ) {// s
                    xanderRef.current.rotation.y -= 0.02

                    if(KeysPressing.size == 1){
                        playAnimation('Idle', 'Xander')
                    }
                }
            } else {
                if (animationInProcess) {
                } else {
                    playAnimation('Idle', 'Xander')
                }
            }
            xanderBodyRef.current.setRotation({
                x: 0,
                y: 0,
                z: 0,
                w: 1
            }, true)
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