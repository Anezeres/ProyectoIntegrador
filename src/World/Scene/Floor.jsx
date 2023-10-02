import { useGLTF, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper } from "three";


const Cuarto = (props) => {
  const { nodes, materials } = useGLTF("/assets/Models/Cuarto/Cuarto2.glb");

  const bedRef = useRef();


  return (
    <group {...props} dispose={null}>

      {/* Este es el suelo */}

      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.White}
        scale={[4, 0.2, 4]}
      />

      {/*  Hasta Acá el suelo */}


      {/* Paredes*/}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.White}
        
      /> */}
    </group>
  );
}

export default Cuarto;
useGLTF.preload("/assets/Models/Cuarto/Cuarto2.glb")


/* [0.038, 2.932, 4.276] */