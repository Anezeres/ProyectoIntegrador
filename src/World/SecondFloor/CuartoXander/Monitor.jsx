import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Monitor = () => {

    const MonitorModel = useGLTF("/assets/Models/Monitor/scene.gltf");
    const MonitorRef = useRef();



    return (
        <>
            <mesh ref={MonitorRef} position={[-18, 2, -12.3]} scale={1.5}  >
                <primitive object={MonitorModel.scene} />
            </mesh>
        </>
    );


}

export default Monitor;
useGLTF.preload("/assets/Models/Monitor/scene.gltf")