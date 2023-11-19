import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Basura = () => {

    const BasuraModel = useGLTF("/assets/Models/Basura/scene.gltf");
    const BasuraRef = useRef();



    return (
        <RigidBody type="fixed" colliders={false}>
            <mesh ref={BasuraRef} position={[-10, 0.23, -11.7]} scale={2.5} >
                <primitive object={BasuraModel.scene} />
            </mesh>
            <CuboidCollider args={[0.5, 0.7, 0.5]} position={[-9.7, 0.8, -11.5 ]} />

        </RigidBody>
    );


}

export default Basura;
useGLTF.preload("/assets/Models/Basura/scene.gltf")