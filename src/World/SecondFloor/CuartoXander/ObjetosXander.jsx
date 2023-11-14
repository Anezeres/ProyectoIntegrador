import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { cameraContext } from "../../Context/cameraContext";
import { CuboidCollider, RigidBody } from "@react-three/rapier";


const ObjetosXander = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");
    const { moveObjectToPositionSmoothly, abrirPuerta } = useContext(cameraContext)

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

            <RigidBody type="fixed" colliders={false}>
                <group scale={2} position={[-8.3, 0.3, -8.6]}>
                    {/* Ropa */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.bathroom_item_001.geometry}
                        material={materials.Material}
                    />
                </group>
                <CuboidCollider args={[0.5,1,0.5]} position={[-8.3, 1, -8.6]}/>
            </RigidBody>


            <RigidBody type="fixed" colliders={false}>
                <group scale={1.6} rotation-y={Math.PI / 2} position={[-13.6, 0.16, -8.2]}>
                    {/* Cama */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.bed_001.geometry}
                        material={materials.Material}
                    />
                </group>
                <CuboidCollider args={[1.8, 0.5, 1]} position={[-13.6, 0.6, -8.2]} />
            </RigidBody>
            <RigidBody type="fixed" colliders={false}>
                <group scale={1.1} rotation-y={Math.PI / 2} position={[-15.8, 0, -7.2]}>
                    {/* Mesa */}
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
                <CuboidCollider args={[0.5, 0.5, 2.2]} position={[-15, 0.5, -5.2]} />
            </RigidBody>
            <RigidBody type="fixed" colliders={false}>
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
                <CuboidCollider args={[1, 2, 0.5]} position={[-10.8, 1.5, -9]} />
            </RigidBody>

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
            <RigidBody type="fixed" colliders={false}>
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
                <CuboidCollider args={[0.4, 0.8, 0.5]} position={[-14.2, 0.5, -5.6]} />
            </RigidBody>
            {/* Colliders Invisibles de la Habitacion */}
            <RigidBody type="fixed" colliders={false}>
                <CuboidCollider args={[4.7, 2.5, 0.5]} position={[-10.8, 2.5, -2.6]} />
                <CuboidCollider args={[1, 2.5, 0.5]} position={[-3.8, 2.5, -2.6]} />
                <CuboidCollider args={[3.2, 2.5, 0.5]} position={[-15.8, 2.5, -6]} rotation={[0, Math.PI / 2, 0]} />
            </RigidBody>
        </group>

    );
}

export default ObjetosXander;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");