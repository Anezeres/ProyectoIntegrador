import { Center, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SciFiChair = () => {

    const SciFiChairModel = useGLTF("/assets/Models/SciFiChair/scene.gltf");
    const SciFiChairRef = useRef();

    return (
        <>
            <mesh ref={SciFiChairRef} rotation-y={-Math.PI/2} position={[-8, 1, 0]} scale={3} >
                <primitive object={SciFiChairModel.scene} />
            </mesh>
        </>
    );


}

export default SciFiChair;
useGLTF.preload("/assets/Models/SciFiChair/scene.gltf")