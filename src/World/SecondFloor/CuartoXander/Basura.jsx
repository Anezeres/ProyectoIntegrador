import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Basura = () => {

    const BasuraModel = useGLTF("/assets/Models/Basura/scene.gltf");
    const BasuraRef = useRef();
    


    return(
        <mesh ref={BasuraRef} position={[-10,0.3,-11.7]} scale={2.5} >
            <primitive object={BasuraModel.scene}/>
        </mesh>
    );

    
}

export default Basura;
useGLTF.preload("/assets/Models/Basura/scene.gltf")