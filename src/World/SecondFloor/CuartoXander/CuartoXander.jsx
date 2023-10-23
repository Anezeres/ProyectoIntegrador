import Arcade from "./Arcade";
import Basura from "./Basura";
import Computador from "./Computador";
import MesaControl from "./MesaControl";
import CuadrosXander from "./CuadrosXander";
import ObjetosXander from "./ObjetosXander";
import PlatformXander from "./PlatformXander";
import WallsXander from "./WallsXander";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { refContext } from "../../Context/refContext";
import { useContext } from "react";


const CuartoXander = () => {

    const { camera } = useContext(refContext)

    const moveCamera = () => {
        console.log(camera)
        camera.position.x = -12;
        camera.position.z = 2;
        camera.position.y = 6;
    }

    moveCamera()
    

    return (
        <>
            <OrbitControls makeDefault target={[-12, 0, -8]}/>
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