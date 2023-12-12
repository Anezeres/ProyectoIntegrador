import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Computador = () => {

    const ComputadorModel = useGLTF("/assets/Models/Computador/scene.gltf");
    const ComputadorRef = useRef();



    return (
        <RigidBody type="fixed" colliders={false}> 
            <mesh ref={ComputadorRef} position={[-4.2, 0, -6]} scale={1.1} rotation-y={Math.PI}>
                <primitive object={ComputadorModel.scene} />
            </mesh>
            <CuboidCollider args={[0.8, 2.5, 2]} position={[-4.5, 2.5, -6]}/>
        </RigidBody>
    );


}

export default Computador;
useGLTF.preload("/assets/Models/Computador/scene.gltf")