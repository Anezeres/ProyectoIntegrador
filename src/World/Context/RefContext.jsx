import React, { createContext, useRef, useState } from "react";
import { refContext } from "./refContext";
import { MathUtils } from 'three';
import { useThree } from "@react-three/fiber";
const { useGLTF } = require("@react-three/drei");
const { useAnimations } = require("@react-three/drei");



const RefContext = ({ children }) => {

    const { camera } = useThree();

    const xanderRef = useRef();
    const rigidXanderRef = useRef();
    const xanderModel = useGLTF("/assets/Models/Characters/Xander/Xander.glb");
    const abuelaRef = useRef();
    const abuelaModel = useGLTF("/assets/Models/Characters/Abuela/Abuela.glb");
    const xanderBodyRef = useRef();

    let { animations: animationsXander } = xanderModel;
    let { actions: actionsXander } = useAnimations(animationsXander, xanderRef);

    let { animations: animationsAbuela } = abuelaModel;
    let { actions: actionsAbuela } = useAnimations(animationsAbuela, abuelaRef);

    const [currentAnimationXander, setCurrentAnimationXander] = useState(null);
    const [animationInProcess, setAnimationInProcess] = useState(false);
    const [currentAnimationAbuela, setCurrentAnimationAbuela] = useState(null);

    let currentAnimation, setCurrentAnimation, actions = null

    const handleCameraPositionChange = (newPosition) => {
        setCameraPosition(newPosition);
    };

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


    function moveObjectToPositionSmoothly(objectRef, targetPosition, duration, onMoveComplete, shouldDestroy = false) {
        if (objectRef.current) {
            const lerpFactor = 0.001;
            const initialPosition = objectRef.current.position.clone();
            let startTime = null;

            function animate(time) {
                if (!startTime) startTime = time;
                const elapsedTime = time - startTime;

                if (elapsedTime < duration) {
                    const t = Math.min(elapsedTime / duration, 1);
                    const newPosition = {
                        x: MathUtils.lerp(initialPosition.x, targetPosition[0], t),
                        y: MathUtils.lerp(initialPosition.y, targetPosition[1], t),
                        z: MathUtils.lerp(initialPosition.z, targetPosition[2], t),
                    };
                    objectRef.current.position.set(newPosition.x, newPosition.y, newPosition.z);
                    requestAnimationFrame(animate);
                } else {
                    // La animación ha terminado, llamamos al callback
                    if (typeof onMoveComplete === 'function') {
                        onMoveComplete();
                    }
                    // Si shouldDestroy es true, eliminamos el objeto
                    if (shouldDestroy) {
                        if (objectRef.current) {
                            objectRef.current.parent.remove(objectRef.current);
                        }
                    }
                }
            }

            requestAnimationFrame(animate);
        }
    }

    const abrirPuerta = (refPuerta) => {
        return () => {
            if (refPuerta.current) {
                if (!refPuerta.isAbierta) {
                    // Abre la puerta 90°
                    const rotacionYDeseada = Math.PI / 2;
                    refPuerta.current.rotation.y = rotacionYDeseada;
                    refPuerta.isAbierta = true;
                } else {
                    // Devuelve la puerta a su posición original
                    const rotacionYOriginal = 0;
                    refPuerta.current.rotation.y = rotacionYOriginal;
                    refPuerta.isAbierta = false;
                }
            }
        };
    };


    return (
        <refContext.Provider
            value={
                {
                    moveObjectToPositionSmoothly,
                    abrirPuerta,
                    camera,
                    xanderRef,
                    rigidXanderRef,
                    xanderModel,
                    actionsXander,
                    currentAnimationXander,
                    abuelaRef,
                    abuelaModel,
                    playAnimationWithDuration,
                    playAnimation,
                    stopAnimation,
                    animationInProcess,
                    setAnimationInProcess,
                    xanderBodyRef,
                }
            }
        >
            {children}
        </refContext.Provider>
    )
}
export default RefContext;
useGLTF.preload("/assets/Models/Characters/Xander/Xander.glb");
useGLTF.preload("/assets/Models/Characters/Abuela/Abuela.glb");
