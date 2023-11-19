import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Laptop = () => {

    const LaptopModel = useGLTF("/assets/Models/Laptop/scene.gltf");
    const LaptopRef = useRef();
    


    return(
        <mesh ref={LaptopRef} position={[-19.5,1.1,-7.3]} scale={0.2} rotation-y={Math.PI/2}>
            <primitive object={LaptopModel.scene}/>
        </mesh>
    );

    
}

export default Laptop;
useGLTF.preload("/assets/Models/Laptop/scene.gltf")