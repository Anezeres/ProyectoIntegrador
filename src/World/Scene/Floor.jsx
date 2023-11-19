import { useGLTF, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper } from "three";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";


const Floor = (props, textures) => {
  const { nodes, materials } = useGLTF("/assets/Models/Cuarto/Cuarto2.glb");

  const bedRef = useRef();


  return (
    <RigidBody type="fixed" >
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.White}
          scale={[4, 0.2, 4]}
        />

        <mesh rotation-x={-Math.PI / 2} scale={0.4} position={[0, 0.201, 0]}>
          <planeGeometry args={[20, 20, 20]} />
          <meshBasicMaterial {...props.textures} />
        </mesh>

      </group>
    </RigidBody>
  );
}

export default Floor;
useGLTF.preload("/assets/Models/Cuarto/Cuarto2.glb")


/* [0.038, 2.932, 4.276] */