import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import Cuadro from "../../Scene/Cuadro";


const CuadrosCorredor = () => {

    const PATH = "/assets/Textures/Cuadros/"

    


    const pintura = useTexture({
        map: PATH + 'SciCuadro.png'
    })




    return(
        <>
            <Cuadro textures={pintura} position={[0,0,0]}/>
        </>
    );

    
}

export default CuadrosCorredor;