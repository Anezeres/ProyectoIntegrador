import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Pantalla = (props) => {

    const PantalleModel = useGLTF("/assets/Models/Pantalla/scene.gltf");
    const PantalleRef = useRef();
    


    return(
        <mesh ref={PantalleRef} {...props} scale={0.1} rotation-y={Math.PI/2}>
            <primitive object={PantalleModel.scene}/>
        </mesh>
    );

    
}

export default Pantalla;
useGLTF.preload("/assets/Models/Pantalla/scene.gltf")