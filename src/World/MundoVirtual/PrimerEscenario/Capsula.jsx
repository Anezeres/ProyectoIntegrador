import { Center, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Capsula = () => {

    const CapsulaModel = useGLTF("/assets/Models/Capsula/scene.gltf");
    const CapsulaRef = useRef();

    return (
        <>
            <mesh ref={CapsulaRef} rotation-y={Math.PI/2} position={[8, 0, 0]} scale={0.3} >
                <primitive object={CapsulaModel.scene} />
            </mesh>
        </>
    );


}

export default Capsula;
useGLTF.preload("/assets/Models/Capsula/scene.gltf")