import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Computador = () => {

    const ComputadorModel = useGLTF("/assets/Models/Computador/scene.gltf");
    const ComputadorRef = useRef();
    


    return(
        <mesh ref={ComputadorRef} position={[-4.2,0,-7.5]} scale={1.1} rotation-y={Math.PI}>
            <primitive object={ComputadorModel.scene}/>
        </mesh>
    );

    
}

export default Computador;
useGLTF.preload("/assets/Models/Computador/scene.gltf")