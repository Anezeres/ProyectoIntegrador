import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const MesaSciFi = () => {

    const MesaSciFiModel = useGLTF("/assets/Models/MesaSciFi/scene.gltf");
    const MesaSciFiRef = useRef();
    


    return(
        <mesh ref={MesaSciFiRef} position={[-5.2,0,-3.5]} scale={0.01} >
            <primitive object={MesaSciFiModel.scene}/>
        </mesh>
    );

    
}

export default MesaSciFi;
useGLTF.preload("/assets/Models/MesaSciFi/scene.gltf")