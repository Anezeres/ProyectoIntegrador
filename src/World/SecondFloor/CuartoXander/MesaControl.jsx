import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const MesaControl = () => {

    const MesaControlModel = useGLTF("/assets/Models/MesaControl/scene.gltf");
    const MesaControlRef = useRef();



    return (
        <RigidBody type="fixed" colliders={false}>
            <mesh ref={MesaControlRef} position={[-12, -0.1, -8.5]} scale={[0.18,0.29,0.18]}  rotation-y={Math.PI}>
                <primitive object={MesaControlModel.scene} />
            </mesh>
            <CuboidCollider args={[1.9,1,1.5]} position={[-12, 0.8, -8]}/>
        </RigidBody>
    );


}

export default MesaControl;
useGLTF.preload("/assets/Models/MesaControl/scene.gltf")