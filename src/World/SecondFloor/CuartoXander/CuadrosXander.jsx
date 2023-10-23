import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import Cuadro from "../../Scene/Cuadro";

const CuadrosXander = () => {

    const PATH = "/assets/Textures/Cuadros/"

    


    const astronauta = useTexture({
        map: PATH + 'Astronauta.png'
    })




    return(
        <>
            <Cuadro textures={astronauta} position={[-8,0,-7.81]}/>
        </>
    );

    
}

export default CuadrosXander;