import Xander from "./Xander";
import Abuela from "./Abuela";

const Personajes = () => {

    return(
        <>
            <Xander position={[0, 0.25, 0]}/> {/* [-10, 0.25, -6] */}
            <Abuela  position={[-15, 0.25, -6]}/>
        </>
    );

    
}

export default Personajes;