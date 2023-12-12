import Floor from "../Scene/Floor";
import Decoraciones from "../Scene/Decoraciones";
import Objetos from "./Objetos";
import Escalera from "./Escalera";
import Pantalla from "./Pantalla";
import Panel from "./Panel";
import { useTexture } from "@react-three/drei";
import Iluminacion from "./Iluminacion";

const Sotano = () => {

    const PATH = "/assets/Textures/Wood/"

    const propsTexture = useTexture({
        map: PATH + 'woodColor.jpg'
    })

    return (
        <>

            {/* <Fondo /> */}
            {/* <Cuarto rotation-y={-Math.PI}/> */}
            <Floor rotation-y={-Math.PI} textures={propsTexture}/>
            <Floor rotation-y={-Math.PI} position={[4.7,0.17,-3.2]} scale={0.2} textures={propsTexture}/>
            {/* <Decoraciones position={[0,1,1]}/> */}
            <Objetos position={[0,0,0]} scale={1.3}/>
            <Escalera/>
            <Pantalla position={[-3.9,2,0]}/>
            <Panel/>
            <Iluminacion/>
        </>
    )

}

export default Sotano;