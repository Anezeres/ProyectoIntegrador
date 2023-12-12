import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const SillaG = () => {

    const SillaGModel = useGLTF("/assets/Models/SillaG/scene.gltf");
    const SillaGRef = useRef();



    return (
        <RigidBody type="fixed" colliders={false}>
            <mesh ref={SillaGRef} position={[-9.5, -0.1, -8]} scale={0.7} rotation-y={Math.PI} castShadow receiveShadow>
                <primitive object={SillaGModel.scene} castShadow receiveShadow/>
            </mesh>
            <CuboidCollider args={[0.6,2,0.6]} position={[-9.5, 1, -8]}/>
        </RigidBody>
    );


}

export default SillaG;
useGLTF.preload("/assets/Models/SillaG/scene.gltf")