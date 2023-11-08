import React, { useRef, useState } from "react";
import { characterContext } from "./characterContext";
import { MathUtils } from 'three';
const { useGLTF } = require("@react-three/drei");
const { useAnimations } = require("@react-three/drei");



const CharacterContext = ({ children }) => {


    const xanderRef = useRef();
    const rigidXanderRef = useRef();
    const xanderModel = useGLTF("/assets/Models/Characters/Xander/Xander.glb");
    const abuelaRef = useRef();
    const abuelaModel = useGLTF("/assets/Models/Characters/Abuela/Abuela.glb");
    const xanderBodyRef = useRef();
    const abuelaBodyRef = useRef();

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

    //Para una animacion
    const moveTo = (position, character) => {
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

    return (
        <characterContext.Provider
            value={
                {
                    xanderRef,
                    xanderBodyRef,
                    rigidXanderRef,
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
