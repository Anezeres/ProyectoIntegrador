import ObjetosPadres from "./ObjetosPadres";
import PlatformPadres from "./PlatformPadres";
import WallsPadres from "./WallsPadres";
import { refContext } from "../../Context/refContext";
import { useContext } from "react";
import { OrbitControls } from "@react-three/drei";




const CuartoPadres = () => {

    const { camera } = useContext(refContext)

    /* const moveCamera = () => {
        console.log(camera)
        camera.position.x = -8;
        camera.position.z = 15;
        camera.position.y = 7;
    }

    

    moveCamera() */

    return (
        <>
            {/* <OrbitControls makeDefault target={[-8, 0, 8]}/> */}
            <ObjetosPadres position={[0,0,0]} scale={1.3}/>
            <PlatformPadres/>
            {/* <WallsPadres/> */}


            
            
            

        </>
    )

}

export default CuartoPadres;