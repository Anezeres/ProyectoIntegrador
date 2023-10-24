import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../Context/refContext";


const ObjetosXander = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");
    const { moveObjectToPositionSmoothly, abrirPuerta } = useContext(refContext)

    const objetoRef = useRef();
    const cameraRef = useRef();

    const puertaXanderRef = useRef();
    const puertaPadreRef = useRef();
    const puertaAbuelaRef = useRef();
    const puertaSotanoRef = useRef();

    useHelper(objetoRef, BoxHelper);

    const moverCamara = () => {
        moveObjectToPositionSmoothly(cameraRef, [0, 0.36, -0.8], 800, () => {
            // Esta función se ejecutará cuando la animación termine
        }, false);
    }

    const abrirPuertaXander = abrirPuerta(puertaXanderRef);

    /* [0, 1, 0] */

    return (
        <group {...props} dispose={null} >


            <group position={[-6, 0, -3]}> {/* Cuarto Xander  */}
                <mesh  /* rotation-y={Math.PI/2} */
                    castShadow
                    receiveShadow
                    geometry={nodes.door_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                    ref={puertaXanderRef}
                    onClick={abrirPuertaXander}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_frame_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                />
            </group>



            {/* Fin Puerta */}


            <group scale={2} position={[-8.3, 0.3, -8.6]}>
                {/* Ropa */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bathroom_item_001.geometry}
                    material={materials.Material}
                    position={[0, 0, 0]}
                />

            </group>



            <group scale={1.6} rotation-y={Math.PI / 2} position={[-12, 0, -12.3]}>
                {/* Cama */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bed_001.geometry}
                    material={materials.Material}
                    position={[-2.582, -0.004, -1.005]}
                />
            </group>


            <group scale={1.1} rotation-y={Math.PI / 2} position={[-15.8, 0, -7.2]}>
                {/* Mesa Gamer */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.office_table_001.geometry}
                    material={materials.Material}
                    position={[-2.894, -0.006, 0.728]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.office_table_001.geometry}
                    material={materials.Material}
                    position={[-1.3, -0.006, 0.728]}
                />
            </group>

            <group position={[-18.7, 0, -6]} scale={1.5}>
                {/* Closet Azul*/}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.closet_002.geometry}
                    material={materials.Material}
                    position={[4.828, 0, -1.815]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.closet_002.geometry}
                    material={materials.Material}
                    position={[5.24, 0, -1.815]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.closet_002.geometry}
                    material={materials.Material}
                    position={[5.65, 0, -1.815]}
                />
            </group>

            {/* Maceta */}
            <group position={[-15, 0.79, -6.5]} scale={1.5}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.flower_001.geometry}
                    material={materials.Material}
                    position={[0.035, 0.003, 2.026]}
                />
            </group>
            <group position={[-15, 0.79, -9.4]} scale={1.5}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.flower_001.geometry}
                    material={materials.Material}
                    position={[0.035, 0.003, 2.026]}
                />
            </group>

            <group rotation-y={-Math.PI / 2} position={[-14.2, 0.2, -5.6]} scale={1.3}>
                {/* Silla Verde */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchen_chair_001.geometry}
                    material={materials.Material}
                    position={[0, 0, 0]}
                />
            </group>

        </group>
    );
}

export default ObjetosXander;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");