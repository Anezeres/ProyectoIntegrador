import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Cuadro = (props, textures) => {

    const cuadroSciFiModel = useGLTF("/assets/Models/Cuadro/scene.gltf");
    


    return(
        <>
            <group {...props} dispose={null}>
                <mesh  position={[0,4,-4]} scale={4} >
                    <primitive object={cuadroSciFiModel.scene}/>
                </mesh>
                <mesh    scale={0.4} position={[0,4,-3.96]}>
                    <planeGeometry args={[5, 10, 1]}/>
                    <meshBasicMaterial {...props.textures} />
                </mesh>
            </group>

        </>
    );

    
}

export default Cuadro;