import { Center, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const PuertaSciFi = () => {

    const PuertaSciFiModel = useGLTF("/assets/Models/PuertaSciFi/scene.gltf");
    const PuertaSciFiRef = useRef();

    return (
        <>
            <mesh ref={PuertaSciFiRef} rotation-y={Math.PI/2} position={[-0.1, 0.2, 0]} scale={2.2} >
                <primitive object={PuertaSciFiModel.scene} />
            </mesh>
        </>
    );


}

export default PuertaSciFi;
useGLTF.preload("/assets/Models/PuertaSciFi/scene.gltf")