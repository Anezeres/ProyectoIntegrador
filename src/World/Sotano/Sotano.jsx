import Floor from "../Scene/Floor";
import Decoraciones from "../Scene/Decoraciones";
import Objetos from "./Objetos";
import Escalera from "./Escalera";
import Pantalla from "./Pantalla";
import Panel from "./Panel";

const Sotano = () => {

    return (
        <>

            {/* <Fondo /> */}
            {/* <Cuarto rotation-y={-Math.PI}/> */}
            <Floor rotation-y={-Math.PI}/>
            <Floor rotation-y={-Math.PI} position={[4.7,0.17,-3.2]} scale={0.2}/>
            {/* <Decoraciones position={[0,1,1]}/> */}
            <Objetos position={[0,0,0]} scale={1.3}/>
            <Escalera/>
            <Pantalla/>
            <Panel/>
        </>
    )

}

export default Sotano;