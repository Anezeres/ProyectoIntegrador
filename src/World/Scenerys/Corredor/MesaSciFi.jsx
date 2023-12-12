import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useContext, useRef } from "react";


const MesaSciFi = () => {
    

    const MesaSciFiModel = useGLTF("/assets/Models/MesaSciFi/scene.gltf");
    const MesaSciFiRef = useRef();
    


    return(
        <RigidBody debug type="fixed">
            <mesh ref={MesaSciFiRef} position={[-5.2,0,-3.5]} scale={0.01}>
                <primitive object={MesaSciFiModel.scene}/>
            </mesh>
        </RigidBody>
    );

    
}

export default MesaSciFi;
useGLTF.preload("/assets/Models/MesaSciFi/scene.gltf")