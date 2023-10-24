import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const SillaG = () => {

    const SillaGModel = useGLTF("/assets/Models/SillaG/scene.gltf");
    const SillaGRef = useRef();



    return (
        <>
            <mesh ref={SillaGRef} position={[-9.5, -0.1, -8]} scale={0.7} rotation-y={Math.PI} >
                <primitive object={SillaGModel.scene} />
            </mesh>
        </>
    );


}

export default SillaG;
useGLTF.preload("/assets/Models/SillaG/scene.gltf")