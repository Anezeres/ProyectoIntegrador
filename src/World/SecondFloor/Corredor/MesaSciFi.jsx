import { useGLTF } from "@react-three/drei";
import { useContext, useRef } from "react";


const MesaSciFi = () => {
    


    const MesaSciFiModel = useGLTF("/assets/Models/MesaSciFi/scene.gltf");
    const MesaSciFiRef = useRef();

    const moveCamera = () => {
        console.log(camera)
        camera.position.x = -12;
        camera.position.z = 0;
        camera.position.z = -8;
    }
    


    return(
        <mesh ref={MesaSciFiRef} position={[-5.2,0,-3.5]} scale={0.01}
            onClick={moveCamera} >
            <primitive object={MesaSciFiModel.scene}/>
        </mesh>
    );

    
}

export default MesaSciFi;
useGLTF.preload("/assets/Models/MesaSciFi/scene.gltf")