import Xander from "./Xander";
import Abuela from "./Abuela";

const Personajes = () => {

    return(
        <>
            <Xander position={[-10, 0.25, -6]}/>
            <Abuela scale={1.5} position={[-15, 0.25, -6]}/>
        </>
    );

    
}

export default Personajes;