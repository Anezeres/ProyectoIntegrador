import React, { useRef, useState } from "react";
import { characterContext } from "./characterContext";
import { MathUtils } from 'three';
const { useGLTF } = require("@react-three/drei");
const { useAnimations } = require("@react-three/drei");
import * as THREE from 'three'; // Importa la biblioteca three.js




const CharacterContext = ({ children }) => {


    //mesh (dibujo de xander)
    const xanderRef = useRef();
    const abuelaRef = useRef();

    //Animaciones
    const xanderModel = useGLTF("/assets/Models/Characters/Xander/Xander.glb");
    const abuelaModel = useGLTF("/assets/Models/Characters/Abuela/Abuela.glb");

    //rigid body fisicas (cylindro)
    const xanderBodyRef = useRef();
    const abuelaBodyRef = useRef();

    //Velocidad
    const velocidadMovimiento = 0.02;

    //Variables de Posicion
    let [newPosition, setNewPosition] = useState([new THREE.Vector3(0, 0, 0)]);
    let [lastPosition, setLastPosition] = useState([new THREE.Vector3(0, 0, 0)]);
    let [arrayPosition, setArrayPosition] = useState([]);
    let [move, setMove] = useState(false);




    let { animations: animationsXander } = xanderModel;
    let { actions: actionsXander } = useAnimations(animationsXander, xanderRef);
    let { animations: animationsAbuela } = abuelaModel;
    let { actions: actionsAbuela } = useAnimations(animationsAbuela, abuelaRef);

    const [currentAnimationXander, setCurrentAnimationXander] = useState(null);
    const [animationInProcess, setAnimationInProcess] = useState(false);
    const [currentAnimationAbuela, setCurrentAnimationAbuela] = useState(null);
    //Muestra las animaciones de xander

    console.log(animationsXander)
    let currentAnimation, setCurrentAnimation, actions = null

    //Realiza una animacion por un tiempo determinado
    const playAnimationWithDuration = (animationName, character, duration) => {
        let currentAnimation;
        let setCurrentAnimation;
        let actions;
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
        action.fadeIn(0.2).play();
        setCurrentAnimation(action);
        setAnimationInProcess(true)

        setTimeout(() => {

            setAnimationInProcess(false)
            stopAnimation(animationName, character)
        }, (duration - 0.2) * 1000);

    };

    //Realiza una animacion en bucle
    const playAnimation = (animationName, character) => {
        let currentAnimation;
        let setCurrentAnimation;
        let actions;
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
            action.fadeIn(0.2).play();

            // Actualizar el estado para rastrear la animación actual
            setCurrentAnimation(action);
        }
    };

    //Para una animacion
    const stopAnimation = (animationName, character) => {
        let currentAnimation;
        let setCurrentAnimation;
        let actions;
        if (character == 'Xander') {
            currentAnimation = currentAnimationXander
            setCurrentAnimation = setCurrentAnimationXander
            actions = actionsXander
        } else if (character == 'Abuela') {
            currentAnimation = currentAnimationAbuela
            setCurrentAnimation = setCurrentAnimationAbuela
            actions = actionsAbuela
        }

        const action = actions[animationName];
        if (action) {
            console.log(action)
            action.fadeOut(0.2)
            setCurrentAnimation(null);
        } else {
            console.error(`La animación "${animationName}" no está definida para el personaje "${character}".`);
        }
        setCurrentAnimation(null);

    };

    //Mueve el personaje (rigidBody)
    const changePosition = (position, character, animationName) => {
        console.log(position)
        setMove(false)
        if (position && Array.isArray(position) && position.length > 0) {
            setLastPosition(xanderBodyRef.current.translation())
            setNewPosition(position[0])
            calcAngle(position[0], character)
            setMove(true)
            const newPositionArray = position.slice(1)
            setArrayPosition(newPositionArray)
        } else {
            playAnimation('Idle', 'Xander')
            setArrayPosition([])
            console.log('entre')
        }
        
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
        playAnimation('Walking', 'Xander')
    };

    //Funcion auxiliar para que los personajes vean hacia adelante
    const calcAngle = (position, character) => {
        if (character == 'Xander') {
            // Calcular el ángulo de rotación
            const angle = Math.atan2(position[0] - xanderBodyRef.current.translation().x, position[2] - xanderBodyRef.current.translation().z);

            console.log(angle)
            // Aplicar la rotación al personaje
            if (angle) {
                xanderRef.current.rotation.y = angle
            }

        } else if (character == 'Abuela') {
            //codigo abuela
        }
    };

    //Teletransporta al personaje a la posicion colocada
    const teleport = (position, character) => {
        let ref = 0
        if (character == 'Xander') {
            ref = xanderBodyRef
        } else if (character == 'Abuela') {
        }

        setLastPosition(ref.current.translation())
        setNewPosition(position)
        ref.current.setTranslation(position, true)
    }

    const rotate = (rotationY, character) => {
        let ref = 0
        if (character == 'Xander') {
            ref = xanderRef
        } else if (character == 'Abuela') {
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
            //codigo abuela
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
                    changePosition,
                    teleport,
                    rotate,
                    move,
                    setMove,
                    moveMesh,
                    arrayPosition,
                    setArrayPosition
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
