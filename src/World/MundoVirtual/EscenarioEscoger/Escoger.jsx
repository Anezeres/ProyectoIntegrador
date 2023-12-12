import { OrbitControls } from "@react-three/drei";

import { useContext } from "react";
import PuertaSciFi from "./PuertaSciFi";
import PlatformEscoger from "./PlatformEscoger";
import WallsEscoger from "./WallsEscoger";
import ObjetosEscoger from "./ObjetosEscoger";
import TextoEscoger from "./TextoEscoger";
import { cameraContext } from "../../../Context/cameraContext";
import Iluminacion from "./Iluminacion";

const Escoger = () => {

    const { camera } = useContext(cameraContext)

    const moveCamera = () => {
        camera.position.x = 0;
        camera.position.z = 9;
        camera.position.y = 7;
    }

    moveCamera()

    return (
        <>
            <OrbitControls makeDefault target={[4, 2, 0]}/>
            <PlatformEscoger/>
            <PuertaSciFi/>
            <WallsEscoger/>
            <ObjetosEscoger/>
            <TextoEscoger/>
            <Iluminacion/>
        </>
    )

}

export default Escoger;