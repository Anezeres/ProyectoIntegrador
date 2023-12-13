import { useGLTF, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper } from "three";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";


const FloorNoRigid = (props, textures) => {
  const { nodes, materials } = useGLTF("/assets/Models/Cuarto/Cuarto2.glb");

  const bedRef = useRef();


  return (
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Floor.geometry}
          material={materials.White}
          scale={[4, 0.2, 4]}
        />

        <mesh rotation-x={-Math.PI / 2} scale={0.4} position={[0, 0.201, 0]} receiveShadow>
          <planeGeometry args={[20, 20, 20]} />
          <meshStandardMaterial {...props.textures} />
        </mesh>

      </group>
  );
}

export default FloorNoRigid;
useGLTF.preload("/assets/Models/Cuarto/Cuarto2.glb")


/* [0.038, 2.932, 4.276] */