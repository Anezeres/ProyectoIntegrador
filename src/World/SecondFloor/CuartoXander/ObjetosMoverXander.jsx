import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../Context/refContext";


const ObjetosMoverXander = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");
    const { moveObjectToPositionSmoothly, abrirPuerta } = useContext(refContext)

    const objetoRef = useRef();
    const cocaColaRef = useRef();
    const cocaColaRef2 = useRef();

    const puertaXanderRef = useRef();

    useHelper(objetoRef, BoxHelper);

    const moverCocaCola= () => {
        moveObjectToPositionSmoothly(cocaColaRef, [4.3, -0.4, -1.1], 1000, () => {
            // Esta función se ejecutará cuando la animación termine
        }, true);
    }
    const moverCocaCola2= () => {
        moveObjectToPositionSmoothly(cocaColaRef2, [4.3, -0.4, -1.1], 1000, () => {
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

        </group>
    );
}

export default ObjetosMoverXander;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");