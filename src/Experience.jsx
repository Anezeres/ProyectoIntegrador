import { KeyboardControls, OrbitControls } from "@react-three/drei"
import Fondo from "./Fondo";
import { AxesHelper } from "three";
import Cuarto from "./World/Cuarto";

import Sotano from "./World/Sotano/Sotano.jsx";
import SecondFloor from "./World/SecondFloor/SecondFloor";
import RefContext from "./World/Context/RefContext.jsx";
import Personajes from "./World/Personajes/Personajes";
import Controls from "./World/Controls/Controls";
import { Physics } from "@react-three/rapier";


const Experience = () => {

    

    return (
        <>
            <RefContext>
            <Physics debug>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                {/* <Fondo /> */}
                {/* <Cuarto rotation-y={-Math.PI}/> */}
                {/* <Sotano /> */}
                <SecondFloor/>
                <axesHelper args={[5]} position={[0, 0,0]} />


                <Personajes/>
                <Controls/>
            </Physics>
                
            </RefContext>
        </>
    )

}

export default Experience;