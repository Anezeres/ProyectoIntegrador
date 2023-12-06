import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Carrito = () => {

    const CarritoModel = useGLTF("/assets/Models/Carrito/scene.gltf");
    const CarritoRef = useRef();
    


    return(
        <mesh ref={CarritoRef} position={[0,0.4,-4]} scale={0.004} >
            <primitive object={CarritoModel.scene}/>
        </mesh>
    );

    
}

export default Carrito;
useGLTF.preload("/assets/Models/Carrito/scene.gltf")