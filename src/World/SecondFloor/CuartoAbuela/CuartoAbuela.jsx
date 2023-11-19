import ObjetosAbuela from "./ObjetosAbuela";
import PlatformAbuela from "./PlatformAbuela";
import WallsAbuela from "./WallsAbuela";
import { refContext } from "../../Context/refContext";
import { useContext } from "react";
import { OrbitControls } from "@react-three/drei";



const CuartoAbuela = () => {

    /* const { camera } = useContext(refContext)

    const moveCamera = () => {
        console.log(camera)
        camera.position.x = 12;
        camera.position.z = 16;
        camera.position.y = 7;
    }

    moveCamera() */

    return (
        <>
            {/* <OrbitControls makeDefault target={[12, 0, 8]}/> */}
            <ObjetosAbuela position={[0,0,0]} scale={1.3}/>
            <PlatformAbuela/>
            <WallsAbuela/>

            
            
            

        </>
    )

}

export default CuartoAbuela;