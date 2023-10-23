import { OrbitControls } from "@react-three/drei"
import Fondo from "./Fondo";
import { AxesHelper } from "three";
import Cuarto from "./World/Cuarto";

import Sotano from "./World/Sotano/Sotano.jsx";
import SecondFloor from "./World/SecondFloor/SecondFloor";
import RefContext from "./World/Context/RefContext";

const Experience = () => {

    return (
        <>
            <RefContext>
                
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                {/* <Fondo /> */}
                {/* <Cuarto rotation-y={-Math.PI}/> */}
                {/* <Sotano /> */}
                <SecondFloor/>
                <axesHelper args={[5]} position={[-8, 0, 8]} />
            </RefContext>
        </>
    )

}

export default Experience;