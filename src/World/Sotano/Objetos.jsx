import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";


const Objetos = (props) =>  {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");

    const objetoRef = useRef();

    useHelper(objetoRef, BoxHelper);

    return (
      <group {...props} dispose={null} >

        {/* Ropa */}
        <group scale={1.6} rotation-y={Math.PI/2}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.bathroom_item_001.geometry}
                material={materials.Material}
                position={[-1.15, 0.1, -1.72]}
            />
        </group>


        {/* Lavadora */}
        <group scale={1.4} rotation-y={Math.PI/2}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.washing_machine_001.geometry}
                material={materials.Material}
                position={[-1.9, 0.1, -1.95]
            }
            />
        </group>

        {/* Lavamanos */}

        <group rotation-y={Math.PI/2} scale={1.1}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.kitchen_table_001.geometry}
                material={materials.Material}
                position={[0, 0.14, -2.4]}
            />
        </group>

        {/* Puerta */}
        <group rotation-y={-Math.PI/2} position={[3, 0, -3]}>
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

        <group  position={[1, 2.6, -2.82]}>
            <mesh  rotation-y={Math.PI/2}
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


        {/* Futolito */}

        <group scale={1.3} >
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.air_hockey_001.geometry}
                material={materials.Material}
                position={[0.7, 0.4, 1.4]}
            />
        </group>


        {/* Lavaplatos */}

        <group rotation-y={Math.PI/2}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.kitchen_sink_001.geometry}
                material={materials.Material}
                position={[2, 0.14, -2.66]}
            />
        </group>

      </group>
    );
  }
  
export default Objetos;
  useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");