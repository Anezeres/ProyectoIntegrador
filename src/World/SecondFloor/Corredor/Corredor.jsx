import { OrbitControls } from "@react-three/drei";
import Panel from "../../Sotano/Panel";
import Pantalla from "../../Sotano/Pantalla";
import Escalera from "./Escalera";
import MesaSciFi from "./MesaSciFi";
import ObjetosCorredor from "./ObjetosCorredor";
import PlatformCorredor from "./PlatformCorredor";
import WallsCorredor from "./WallsCorredor";
import { refContext } from "../../Context/refContext";
import { useContext } from "react";

const Corredor = () => {

    const { camera } = useContext(refContext)

    const moveCamera = () => {
        camera.position.x = 0;
        camera.position.z = 9;
        camera.position.y = 6;
    }

    moveCamera()

    return (
        <>
            <OrbitControls makeDefault target={[4, 0, 0]}/>
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