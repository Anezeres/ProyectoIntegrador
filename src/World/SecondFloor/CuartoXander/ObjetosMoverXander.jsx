import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { cameraContext } from "../../Context/cameraContext";


const ObjetosMoverXander = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");
    const { moveObjectToPositionSmoothly, abrirPuerta } = useContext(cameraContext)

    const objetoRef = useRef();
    const cocaColaRef = useRef();
    const cocaColaRef2 = useRef();

    const toallaRef = useRef();
    const toallaRef2 = useRef();
    const toallaRef3 = useRef();

    const puertaXanderRef = useRef();

    useHelper(objetoRef, BoxHelper);

    const moverCocaCola = () => {
        moveObjectToPositionSmoothly(cocaColaRef, [4.3, -0.4, -1.1], 1000, () => {
            // Esta función se ejecutará cuando la animación termine
        }, true);
    }
    const moverCocaCola2 = () => {
        moveObjectToPositionSmoothly(cocaColaRef2, [4.3, -0.4, -1.1], 1000, () => {
            // Esta función se ejecutará cuando la animación termine
        }, true);
    }

    const moverToalla = () => {
        moveObjectToPositionSmoothly(toallaRef, [-8.3, 1.7, -8.5], 1000, () => {
            // Esta función se ejecutará cuando la animación termine
        }, true);
    }

    const moverToalla2 = () => {
        moveObjectToPositionSmoothly(toallaRef2, [-8.3, 1.7, -8.5], 1000, () => {
            // Esta función se ejecutará cuando la animación termine
        }, true);
    }

    const moverToalla3 = () => {
        moveObjectToPositionSmoothly(toallaRef3, [-8.3, 1.7, -8.5], 1000, () => {
            // Esta función se ejecutará cuando la animación termine
        }, true);
    }


    /* [1.329, -0.131, 1.992]*/

    return (
        <group {...props} dispose={null} >

            <group position={[-11.7, 1.4, -7.7]}>
                {/* Coca Cola */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drink_001.geometry}
                    material={materials.Material}
                    position={[1.329, -0.131, 1.992]}
                    ref={cocaColaRef}
                    onClick={moverCocaCola}
                />
            </group>


            <group position={[-11.7, 1.4, -8.7]}>
                {/* Coca Cola */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drink_001.geometry}
                    material={materials.Material}
                    position={[1.329, -0.131, 1.992]}
                    ref={cocaColaRef2}
                    onClick={moverCocaCola2}
                />
            </group>

            {/* Toallas */}
            <group >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.clothes_002.geometry}
                    material={materials.Material}
                    position={[-12.7, 0.14, -5.7]}
                    ref={toallaRef}
                    onClick={moverToalla}
                />
            </group>

            <group >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.clothes_002.geometry}
                    material={materials.Material}
                    position={[-12.7, 0.14, -3.7]}
                    ref={toallaRef2}
                    onClick={moverToalla2}
                />
            </group>

            <group > 
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.clothes_002.geometry}
                    material={materials.Material}
                    position={[-7.7, 0.14, -3.7]} /* [-7.7, 0.14, -3.7] */
                    ref={toallaRef3}
                    onClick={moverToalla3}
                />
            </group>

        </group>
    );
}

export default ObjetosMoverXander;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");