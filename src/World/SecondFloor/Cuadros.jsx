import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import Cuadro from "../Scene/Cuadro";

const Cuadros = () => {

    const PATH = "/assets/Textures/Cuadros/"

    


    const cuadroSciFi = useTexture({
        map: PATH + 'SciCuadro.png'
    })

    const astronauta = useTexture({
        map: PATH + 'Astronauta.png'
    })




    return(
        <>
            <Cuadro textures={cuadroSciFi}/>
            <Cuadro textures={astronauta} position={[-8,0,-7.81]}/>
        </>
    );

    
}

export default Cuadros;