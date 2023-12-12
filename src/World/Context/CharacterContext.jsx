import React, { useRef, useState, useEffect } from "react";
import { characterContext } from "./characterContext";
const { useGLTF } = require("@react-three/drei");
const { useAnimations } = require("@react-three/drei");
import * as THREE from 'three'; // Importa la biblioteca three.js

const CharacterContext = ({ children }) => {

    //Velocidad
    const velocidadMovimiento = 0.02;

    //mesh 
    const xanderRef = useRef();
    const abuelaRef = useRef();
    const ravenRef = useRef();

    //Animaciones
    const xanderModel = useGLTF("/assets/Models/Characters/Xander/Xander.glb");
    const abuelaModel = useGLTF("/assets/Models/Characters/Abuela/Abuela.glb");
    const ravenModel = useGLTF("/assets/Models/Characters/Raven/Raven.glb");

    //rigid body fisicas (cylindro)
    const xanderBodyRef = useRef();
    const abuelaBodyRef = useRef();
    const ravenBodyRef = useRef();

    //Variables de Posicion
    let [newPositionXander, setNewPositionXander] = useState([new THREE.Vector3(0, 0, 0)]);
    let [lastPositionXander, setLastPositionXander] = useState([new THREE.Vector3(0, 0, 0)]);
    let [newPositionAbuela, setNewPositionAbuela] = useState([new THREE.Vector3(0, 0, 0)]);
    let [lastPositionAbuela, setLastPositionAbuela] = useState([new THREE.Vector3(0, 0, 0)]);
    let [newPositionRaven, setNewPositionRaven] = useState([new THREE.Vector3(0, 0, 0)]);
    let [lastPositionRaven, setLastPositionRaven] = useState([new THREE.Vector3(0, 0, 0)]);

    let [arrayPositionXander, setArrayPositionXander] = useState([]);
    let [finalAnimation, setFinalAnimation] = useState('')
    let [callBack, setCallBack] = useState(null)
    let [arrayPositionAbuela, setArrayPositionAbuela] = useState([]);
    let [arrayPositionRaven, setArrayPositionRaven] = useState([]);

    let [moveXander, setMoveXander] = useState(false);
    let [moveAbuela, setMoveAbuela] = useState(false);
    let [moveRaven, setMoveRaven] = useState(false);

    let { animations: animationsXander } = xanderModel;
    let { actions: actionsXander } = useAnimations(animationsXander, xanderRef);
    let { animations: animationsAbuela } = abuelaModel;
    let { actions: actionsAbuela } = useAnimations(animationsAbuela, abuelaRef);
    let { animations: animationsRaven } = ravenModel;
    let { actions: actionsRaven } = useAnimations(animationsRaven, ravenRef);


    const [currentAnimationXander, setCurrentAnimationXander] = useState(null);
    const [currentAnimationAbuela, setCurrentAnimationAbuela] = useState(null);
    const [currentAnimationRaven, setCurrentAnimationRaven] = useState(null);

    //Muestra las animaciones de xander

    //console.log(animationsXander)
    //console.log(animationsRaven)

    //Realiza una animación por un tiempo determinado
    const playAnimation = (animationName, character, duration = null) => {
        let currentAnimation;
        let actions;

        if (character === 'Xander') {
            currentAnimation = currentAnimationXander;
            actions = actionsXander;
        } else if (character === 'Abuela') {
            currentAnimation = currentAnimationAbuela;
            actions = actionsAbuela;
        } else if (character === 'Raven') {
            currentAnimation = currentAnimationRaven;
            actions = actionsRaven;
        }

        if (currentAnimation) {
            currentAnimation.fadeOut(0.2);
        }
        
        const targetAnimation = actions[animationName];
        targetAnimation.reset().fadeIn(0.2).play();

        setCurrentAnimation(character, () => targetAnimation);

        if (duration !== null) {
            setTimeout(() => {
                stopAnimation(character);
            }, (duration - 0.2) * 1000);
        }

    };

    const stopAnimation = (character) => {
        let currentAnimation;

        if (character === 'Xander') {
            currentAnimation = currentAnimationXander;
        } else if (character === 'Abuela') {
            currentAnimation = currentAnimationAbuela;
        } else if (character === 'Raven') {
            currentAnimation = currentAnimationRaven;
        }

        if (currentAnimation) {
            currentAnimation.fadeOut(0.2)
            setCurrentAnimation(character, () => null);
        }
    };

    const setCurrentAnimation = (character, updater) => {
        if (character === 'Xander') {
            setCurrentAnimationXander(updater);
        } else if (character === 'Abuela') {
            setCurrentAnimationAbuela(updater);
        } else if (character === 'Raven') {
            setCurrentAnimationRaven(updater);
        }
    };

    // Asegurarse de limpiar cualquier animación en desmontaje del componente
    useEffect(() => {
        return () => {
            if (currentAnimationXander) {
                currentAnimationXander.fadeOut(0.2)
            }
            if (currentAnimationAbuela) {
                currentAnimationAbuela.fadeOut(0.2)
            }
            if (currentAnimationRaven) {
                currentAnimationRaven.fadeOut(0.2)
            }
        };
    }, [currentAnimationXander, currentAnimationAbuela, currentAnimationRaven]);

    //Mueve el personaje (rigidBody)
    const changePosition = (position, character, animationName, callback) => {
        if (character == 'Xander') {
            setMoveXander(false)
        } else if (character == 'Abuela') {
            setMoveAbuela(false)
        } else if (character == 'Raven') {
            setMoveRaven(false)
        }

        if (character == 'Xander') {
            if (position && Array.isArray(position) && position.length > 0) {
                setLastPositionXander(xanderBodyRef.current.translation())
                setNewPositionXander(position[0])
                calcAngle(position[0], character)
                setMoveXander(true)
                const newPositionArray = position.slice(1)
                setArrayPositionXander(newPositionArray)
                setFinalAnimation(animationName)
                setCallBack(() => callback)
            } else {
                setArrayPositionXander([])
                // Llama a la función de callback al final
                callback && callback();
                setCallBack(null)
            }
        } else if (character == 'Abuela') {
            if (position && Array.isArray(position) && position.length > 0) {
                setLastPositionAbuela(abuelaBodyRef.current.translation())
                setNewPositionAbuela(position[0])
                calcAngle(position[0], character)
                setMoveAbuela(true)
                const newPositionArray = position.slice(1)
                setArrayPositionAbuela(newPositionArray)
            } else {
                setArrayPositionAbuela([])
                // Llama a la función de callback al final
                if (callback) {
                    callback();
                }
            }
        } else if (character == 'Raven') {
            if (position && Array.isArray(position) && position.length > 0) {
                setLastPositionRaven(ravenBodyRef.current.translation())
                setNewPositionRaven(position[0])
                calcAngle(position[0], character)
                setMoveRaven(true)
                const newPositionArray = position.slice(1)
                setArrayPositionRaven(newPositionArray)
            } else {
                setArrayPositionRaven([])
                // Llama a la función de callback al final
                if (callback) {
                    callback();
                }
            }
        }

    };

    //Para mover el personaje a una posición
    const moveTo = (position, animationName, character) => {
        let currentAnimation;
        let actions;

        if (character === 'Xander') {
            currentAnimation = currentAnimationXander;
            actions = actionsXander;
        } else if (character === 'Abuela') {
            currentAnimation = currentAnimationAbuela;
            actions = actionsAbuela;
        } else if (character === 'Raven') {
            currentAnimation = currentAnimationRaven;
            actions = actionsRaven;
        }

        const targetAnimation = actions[animationName];

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

            if (targetAnimation && targetAnimation !== currentAnimation) {
                playAnimation('Walking', 'Xander', null)
            }

        } else if (character == 'Abuela') {

            const currentPos = abuelaBodyRef.current.translation();
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
            abuelaBodyRef.current.setTranslation({
                x: currentPos.x + (velocidadMovimiento * direccionX),
                y: currentPos.y,
                z: currentPos.z + (velocidadMovimiento * direccionZ)
            }, true)

            if (targetAnimation && targetAnimation !== currentAnimation) {
                playAnimation('Walking', 'Abuela', null)
            }
        } else if (character == 'Raven') {
            const currentPos = ravenBodyRef.current.translation();
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
            ravenBodyRef.current.setTranslation({
                x: currentPos.x + (velocidadMovimiento * direccionX),
                y: currentPos.y,
                z: currentPos.z + (velocidadMovimiento * direccionZ)
            }, true)

            if (targetAnimation && targetAnimation !== currentAnimation) {
                playAnimation('Walking', 'Raven', null)
            }
        }
    };

    //Funcion auxiliar para que los personajes vean hacia adelante
    const calcAngle = (position, character) => {
        if (character == 'Xander') {
            // Calcular el ángulo de rotación
            const angle = Math.atan2(position[0] - xanderBodyRef.current.translation().x, position[2] - xanderBodyRef.current.translation().z);

            // Aplicar la rotación al personaje
            if (angle) {
                xanderRef.current.rotation.y = angle
            }

        } else if (character == 'Abuela') {
            // Calcular el ángulo de rotación
            const angle = Math.atan2(position[0] - abuelaBodyRef.current.translation().x, position[2] - abuelaBodyRef.current.translation().z);

            // Aplicar la rotación al personaje
            if (angle) {
                abuelaRef.current.rotation.y = angle
            }
        } else if (character == 'Raven') {
            // Calcular el ángulo de rotación
            const angle = Math.atan2(position[0] - ravenBodyRef.current.translation().x, position[2] - ravenBodyRef.current.translation().z);

            // Aplicar la rotación al personaje
            if (angle) {
                ravenRef.current.rotation.y = angle
            }
        }
    };

    //Teletransporta al personaje a la posicion colocada
    const teleport = (position, character) => {
        let ref = 0
        if (character == 'Xander') {
            ref = xanderBodyRef
        } else if (character == 'Abuela') {
            ref = abuelaBodyRef
        } else if (character == 'Raven') {
            ref = ravenBodyRef
        }

        setLastPositionXander(ref.current.translation())
        setNewPositionXander(position)
        ref.current.setTranslation(position, true)
    }

    const rotate = (rotationY, character) => {
        let ref = 0
        if (character == 'Xander') {
            ref = xanderRef
        } else if (character == 'Abuela') {
            ref = abuelaRef
        } else if (character == 'Raven') {
            ref = ravenRef
        }
        ref.current.rotation.y = ref.current.rotation.y + rotationY

    }

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

    //Para mover el personaje a una posicion
    const moveMesh = (position, character) => {
        if (character == 'Xander') {
            xanderRef.current.position.x = xanderRef.current.position.x + position[0];
            xanderRef.current.position.y = xanderRef.current.position.y + position[1];
            xanderRef.current.position.z = xanderRef.current.position.z + position[2];
        } else if (character == 'Abuela') {
            abuelaRef.current.position.x = abuelaRef.current.position.x + position[0];
            abuelaRef.current.position.y = abuelaRef.current.position.y + position[1];
            abuelaRef.current.position.z = abuelaRef.current.position.z + position[2];
        } else if (character == 'Raven') {
            ravenRef.current.position.x = ravenRef.current.position.x + position[0];
            ravenRef.current.position.y = ravenRef.current.position.y + position[1];
            ravenRef.current.position.z = ravenRef.current.position.z + position[2];
        }
    };

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
                    actionsAbuela,
                    currentAnimationAbuela,
                    ravenRef,
                    ravenBodyRef,
                    ravenModel,
                    actionsRaven,
                    currentAnimationRaven,
                    playAnimation,
                    stopAnimation,
                    walkingFront,
                    velocidadMovimiento,
                    moveTo,
                    newPositionXander,
                    setNewPositionXander,
                    newPositionAbuela,
                    setNewPositionAbuela,
                    newPositionRaven,
                    setNewPositionRaven,
                    lastPositionXander,
                    setLastPositionXander,
                    lastPositionAbuela,
                    setLastPositionAbuela,
                    lastPositionRaven,
                    setLastPositionRaven,
                    changePosition,
                    teleport,
                    rotate,
                    moveXander,
                    setMoveXander,
                    moveAbuela,
                    setMoveAbuela,
                    moveRaven,
                    setMoveRaven,
                    moveMesh,
                    arrayPositionXander,
                    setArrayPositionXander,
                    arrayPositionAbuela,
                    setArrayPositionAbuela,
                    arrayPositionRaven,
                    setArrayPositionRaven,
                    callBack,
                    finalAnimation
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
useGLTF.preload("/assets/Models/Characters/Raven/Raven.glb");

