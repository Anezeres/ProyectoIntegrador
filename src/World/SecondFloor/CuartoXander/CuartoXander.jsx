import Arcade from "./Arcade";
import Basura from "./Basura";
import Computador from "./Computador";
import MesaControl from "./MesaControl";
import CuadrosXander from "./CuadrosXander";
import ObjetosXander from "./ObjetosXander";
import PlatformXander from "./PlatformXander";
import WallsXander from "./WallsXander";


const CuartoXander = () => {

    return (
        <>
            <Computador/>
            <Arcade/>
            <Basura/>
            <MesaControl/>
            <ObjetosXander position={[0,0,0]} scale={1.3}/>
            <WallsXander/>
            <CuadrosXander/>
            <PlatformXander/>
            
            
            

        </>
    )

}

export default CuartoXander;