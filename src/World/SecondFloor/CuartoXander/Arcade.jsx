import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Arcade = () => {

    const ArcadeModel = useGLTF("/assets/Models/Arcade/scene.gltf");
    const ArcadeRef = useRef();
    


    return(
        <mesh ref={ArcadeRef} position={[-5,1.8,-11.1]} scale={1.6} rotation-y={Math.PI}>
            <primitive object={ArcadeModel.scene}/>
        </mesh>
    );

    
}

export default Arcade;
useGLTF.preload("/assets/Models/Arcade/scene.gltf")