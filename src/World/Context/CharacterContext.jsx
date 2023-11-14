import React, { useRef, useState } from "react";
import { characterContext } from "./characterContext";
import { MathUtils } from 'three';
const { useGLTF } = require("@react-three/drei");
const { useAnimations } = require("@react-three/drei");
import * as THREE from 'three'; // Importa la biblioteca three.js




const CharacterContext = ({ children }) => {


    const xanderRef = useRef();
    const xanderModel = useGLTF("/assets/Models/Characters/Xander/Xander.glb");
    const abuelaRef = useRef();
    const abuelaModel = useGLTF("/assets/Models/Characters/Abuela/Abuela.glb");
    const xanderBodyRef = useRef();
    const abuelaBodyRef = useRef();
    const velocidadMovimiento = 0.02;
    let [newPosition, setNewPosition] = useState([new THREE.Vector3(0, 0, 0)]);
    let [lastPosition, setLastPosition] = useState([new THREE.Vector3(0, 0, 0)]);



    let { animations: animationsXander } = xanderModel;
    let { actions: actionsXander } = useAnimations(animationsXander, xanderRef);

    let { animations: animationsAbuela } = abuelaModel;
    let { actions: actionsAbuela } = useAnimations(animationsAbuela, abuelaRef);

    const [currentAnimationXander, setCurrentAnimationXander] = useState(null);
    const [animationInProcess, setAnimationInProcess] = useState(false);
    const [currentAnimationAbuela, setCurrentAnimationAbuela] = useState(null);

    let currentAnimation, setCurrentAnimation, actions = null

    //Realiza una animacion por un tiempo determinado
    const playAnimationWithDuration = (animationName, character, duration) => {
        if (character == 'Xander') {
            currentAnimation = currentAnimationXander
            setCurrentAnimation = setCurrentAnimationXander
            actions = actionsXander
        } else if (character == 'Abuela') {
            currentAnimation = currentAnimationAbuela
            setCurrentAnimation = setCurrentAnimationAbuela
            actions = actionsAbuela
        }

        if (currentAnimation !== null) {
            currentAnimation.fadeOut(0.2);
        }

        const action = actions[animationName];
        action.reset().fadeIn(0.2).play();
        setCurrentAnimation(action);
        setAnimationInProcess(true)

        setTimeout(() => {

            setAnimationInProcess(false)

        }, (duration - 0.2) * 1000);

    };

    //Realiza una animacion en bucle
    const playAnimation = (animationName, character) => {

        if (character == 'Xander') {
            currentAnimation = currentAnimationXander
            setCurrentAnimation = setCurrentAnimationXander
            actions = actionsXander
        } else if (character == 'Abuela') {
            currentAnimation = currentAnimationAbuela
            setCurrentAnimation = setCurrentAnimationAbuela
            actions = actionsAbuela
        }

        if (actions[animationName] !== currentAnimation) {
            if (currentAnimation !== null) {
                // Detener la animación actual si hay una en curso
                currentAnimation.fadeOut(0.2);
            }

            // Reproducir la animación seleccionada
            const action = actions[animationName];
            action.reset().fadeIn(0.2).play();

            // Actualizar el estado para rastrear la animación actual
            setCurrentAnimation(action);
        }
    };

    //Para una animacion
    const stopAnimation = (character) => {
        if (character == 'Xander') {
            currentAnimation = currentAnimationXander
            setCurrentAnimation = setCurrentAnimationXander
        } else if (character == 'Abuela') {
            currentAnimation = currentAnimationAbuela
            setCurrentAnimation = setCurrentAnimationAbuela
        }

        if (currentAnimation !== null) {
            currentAnimation.stop();
            setCurrentAnimation(null);
        }
    };

    const changePosition = (position, character) => {
        setNewPosition(position)
        setLastPosition(xanderBodyRef.current.translation())
        calcAngle(position, character)
    };

    //Para mover el personaje a una posicion
    const moveTo = (position, character) => {
        if (character == 'Xander') {
            const currentPos = xanderBodyRef.current.translation();
            let direccionX = 0
            let direccionZ = 0

            if (currentPos.x == position[0]) {

            } else if (currentPos.x > position[0]) {
                direccionX = -1
            } else {
                direccionX = 1
            }

            if (currentPos.z == position[2]) {

            } else if (currentPos.z > position[2]) {
                direccionZ = -1
            } else {
                direccionZ = 1
            }

            //const desplazamiento = walkingFront(true, velocidadMovimiento)
            xanderBodyRef.current.setTranslation({
                x: currentPos.x + (velocidadMovimiento * direccionX),
                y: currentPos.y,
                z: currentPos.z + (velocidadMovimiento * direccionZ)
            }, true)


        } else if (character == 'Abuela') {
            //codigo abuela
        }
    };

    //Funcion auxiliar para que los personajes vean hacia adelante
    const calcAngle = (position, character) => {
        if (character == 'Xander') {
            const currentPos = lastPosition;

            // Calcular el ángulo de rotación
            const angle = Math.atan2(position[0] - currentPos[0], position[2] - currentPos[2]);

            // Aplicar la rotación al personaje
            if (angle) {
                xanderRef.current.rotation.y = angle
            }

        } else if (character == 'Abuela') {
            //codigo abuela
        }
    };

    const walkingFront = (positive, velocidadMovimiento) => {
        let forwardVector = 0
        if (positive) {
            forwardVector = new THREE.Vector3(0, 0, 1).applyQuaternion(xanderRef.current.quaternion);
        } else {
            forwardVector = new THREE.Vector3(0, 0, -1).applyQuaternion(xanderRef.current.quaternion);
        }
        forwardVector.normalize();

        // Calcula el desplazamiento basado en la velocidad de movimiento
        return forwardVector.clone().multiplyScalar(velocidadMovimiento);
    }


    return (
        <characterContext.Provider
            value={
                {
                    xanderRef,
                    xanderBodyRef,
                    xanderModel,
                    actionsXander,
                    currentAnimationXander,
                    abuelaRef,
                    abuelaBodyRef,
                    abuelaModel,
                    playAnimationWithDuration,
                    playAnimation,
                    stopAnimation,
                    animationInProcess,
                    setAnimationInProcess,
                    walkingFront,
                    velocidadMovimiento,
                    moveTo,
                    newPosition,
                    setNewPosition,
                    lastPosition,
                    setLastPosition,
                    changePosition
                }
            }
        >
            {children}
        </characterContext.Provider>
    )
}
export default CharacterContext;
useGLTF.preload("/assets/Models/Characters/Xander/Xander.glb");
useGLTF.preload("/assets/Models/Characters/Abuela/Abuela.glb");
