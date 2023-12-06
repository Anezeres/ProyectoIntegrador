import { OrbitControls } from "@react-three/drei";
import WallsPrimerEsc from "./WallsPrimerEsc";
import PlatformPrimerEsc from "./PlatformPrimerEsc";
import { useContext } from "react";
import { cameraContext } from "../../Context/cameraContext";
import PuertaSciFi from "./PuertaSciFi";
import Capsula from "./Capsula";
import Cubos from "./Cubos";

const PrimerEscenario = () => {

    const { camera } = useContext(cameraContext)

    const moveCamera = () => {
        camera.position.x = 0;
        camera.position.z = 9;
        camera.position.y = 7;
    }

    moveCamera()

    return (
        <>
            <OrbitControls makeDefault target={[0, 2, 0]}/>
            <PlatformPrimerEsc/>
            <PuertaSciFi/>
            <Capsula/>
            <Cubos/>
            <WallsPrimerEsc/>
        </>
    )

}

export default PrimerEscenario;