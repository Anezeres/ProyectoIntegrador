import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";


const Objetos = (props) =>  {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");

    const objetoRef = useRef();

    useHelper(objetoRef, BoxHelper);

    return (
      <group {...props} dispose={null} >

        {/* Lavamanos */}

        <group rotation-y={Math.PI/2} scale={1.1}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.kitchen_table_001.geometry}
                material={materials.Material}
                position={[6, 0.14, 3.22]}
            />
        </group>

        {/* Lavaplatos */}

        <group rotation-y={Math.PI/2}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.kitchen_sink_001.geometry}
                material={materials.Material}
                position={[4.6, 0.14, 3.5]}
            />
        </group>

        {/* Nevera */}
        <group rotation-y={Math.PI/2} scale={1.3}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.fridge_001.geometry}
                material={materials.Material}
                position={[6.58, 0.14, 2.67]}
            />

        </group>

        <group rotation-y={-Math.PI/2} scale={1.3}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.tv_wall_001.geometry}
                material={materials.Material}
                position={[-4.7, 0.008, -11.5]}
            />
        </group>

        

        {/* Puerta */}
        <group position={[12, 0, -9]}> {/* Entrada Casa */}
            <mesh  /* rotation-y={Math.PI/2} Funcionalidad para Abrir la puerta*/ 
            castShadow
            receiveShadow
            geometry={nodes.door_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.door_frame_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
        </group>

        <group  position={[1,0,3]}> {/* Cuarto Sotano */}
            <mesh  /* rotation-y={Math.PI/2} */
            castShadow
            receiveShadow
            geometry={nodes.door_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.door_frame_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
        </group>

        <group  position={[-6,0,-3]}> {/* Cuarto Xander  */}
            <mesh  /* rotation-y={Math.PI/2} */
            castShadow
            receiveShadow
            geometry={nodes.door_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.door_frame_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
        </group>

        <group  position={[-6,0,3]}> {/* Cuarto de Abuela */}
            <mesh  /* rotation-y={Math.PI/2} */
            castShadow
            receiveShadow
            geometry={nodes.door_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.door_frame_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
            />
        </group>

        <group  position={[6,0,3]}> {/* Cuarto de Abuela */}
            <mesh  /* rotation-y={Math.PI/2} */
            castShadow
            receiveShadow
            geometry={nodes.door_001.geometry}
            material={materials.Material}
            position={[0, 0.1, 0]}
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


        {/* Mesita Pequeña */}

        <group position={[14,0,0.4]} scale={1.2} rotation-y={-Math.PI/2}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.coffee_table_001.geometry}
                material={materials.Material}
                position={[-5.238, 0, 0.745]}
            />
        </group>

        <group rotation-y={Math.PI/2} position={[11.7,0,-5.8]}>
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.sofa_001.geometry}
            material={materials.Material}
            position={[0, 0, 0]}
            />
        </group>
            
        

        </group>
    );
  }
  
export default Objetos;
  useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");