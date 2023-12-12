import { Center, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Computer = () => {

    const ComputerModel = useGLTF("/assets/Models/Computer/scene.gltf");
    const ComputerRef = useRef();

    return (
        <>
            <mesh ref={ComputerRef} rotation-y={-Math.PI/2} position={[3, 1.8, 0]} scale={0.5} >
                <primitive object={ComputerModel.scene} />
            </mesh>
        </>
    );


}

export default Computer;
useGLTF.preload("/assets/Models/Computer/scene.gltf")