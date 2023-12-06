import { OrbitControls } from "@react-three/drei";
import WallsPrimerEsc from "./WallsPrimerEsc";
import PlatformPrimerEsc from "./PlatformPrimerEsc";

const PrimerEscenario = () => {

    /* const { camera } = useContext(refContext)

    const moveCamera = () => {
        camera.position.x = 0;
        camera.position.z = 9;
        camera.position.y = 6;
    }

    moveCamera() */

    return (
        <>
            <OrbitControls makeDefault target={[8, 6, -4]}/>
            <PlatformPrimerEsc/>

            <WallsPrimerEsc/>

        </>
    )

}

export default PrimerEscenario;