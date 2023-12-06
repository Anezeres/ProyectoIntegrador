import { OrbitControls } from "@react-three/drei";
import { useContext } from "react";
import { cameraContext } from "../../Context/cameraContext";
import PlatformSegundoEsc from "./PlatformSegundoEsc";
import WallsSegundoEsc from "./WallsSegundoEsc";
import Carrito from "./Carrito";
import Drone from "./Drone";

const SegundoEscenario = () => {

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
            <PlatformSegundoEsc/>
            <Carrito/>
            <Drone/>

            <WallsSegundoEsc/>

        </>
    )

}

export default SegundoEscenario;