import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Escalera = () => {

    const EscaleraModel = useGLTF("/assets/Models/Escalera/scene.glb");
    const EscaleraRef = useRef();
    


    return(
        <mesh ref={EscaleraRef} position={[1,2,-2]} scale={2} rotation-y={-Math.PI/2}>
            <primitive object={EscaleraModel.scene}/>
        </mesh>
    );

    
}

export default Escalera;
useGLTF.preload("/assets/Models/Escalera/scene.glb")