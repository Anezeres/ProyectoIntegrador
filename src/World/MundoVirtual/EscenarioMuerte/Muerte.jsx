import { OrbitControls } from "@react-three/drei";

import { useContext } from "react";
import { cameraContext } from "../../Context/cameraContext";
import PlatformMuerte from "./PlatformMuerte";
import WallsMuerte from "./WallsMuerte";
import Computer from "./Computador";
import SciFiChair from "./SciFiChair";

const Muerte = () => {

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
            <PlatformMuerte/>
            <WallsMuerte/>
            <Computer/>
            <SciFiChair/>
        </>
    )

}

export default Muerte;