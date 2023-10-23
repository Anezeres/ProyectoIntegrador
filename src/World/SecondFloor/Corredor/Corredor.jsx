import Panel from "../../Sotano/Panel";
import Pantalla from "../../Sotano/Pantalla";
import Escalera from "./Escalera";
import MesaSciFi from "./MesaSciFi";
import ObjetosCorredor from "./ObjetosCorredor";
import PlatformCorredor from "./PlatformCorredor";
import WallsCorredor from "./WallsCorredor";

const Corredor = () => {

    return (
        <>
            <Escalera/>
            <Panel position={[-5,1.5,-3]} rotation-y={-Math.PI/2}/>
            <Pantalla position={[-11.8,2,0]}/>
            <MesaSciFi/>
            <ObjetosCorredor position={[0,0,0]} scale={1.3} />
            <WallsCorredor/>
            <PlatformCorredor/>

        </>
    )

}

export default Corredor;