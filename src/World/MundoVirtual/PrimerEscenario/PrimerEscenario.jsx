import { OrbitControls } from "@react-three/drei";
import WallsPrimerEsc from "./WallsPrimerEsc";
import PlatformPrimerEsc from "./PlatformPrimerEsc";
import { useContext } from "react";
import { cameraContext } from "../../Context/cameraContext";

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
            <WallsPrimerEsc/>
        </>
    )

}

export default PrimerEscenario;