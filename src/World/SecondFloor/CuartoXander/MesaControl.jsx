import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const MesaControl = () => {

    const MesaControlModel = useGLTF("/assets/Models/MesaControl/scene.gltf");
    const MesaControlRef = useRef();
    


    return(
        <mesh ref={MesaControlRef} position={[-12,0,-8.5]} scale={0.18} rotation-y={Math.PI}>
            <primitive object={MesaControlModel.scene}/>
        </mesh>
    );

    
}

export default MesaControl;
useGLTF.preload("/assets/Models/MesaControl/scene.gltf")