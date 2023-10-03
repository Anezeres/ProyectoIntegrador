import { OrbitControls } from "@react-three/drei"
import Fondo from "./Fondo";
import { AxesHelper } from "three";
import Cuarto from "./World/Cuarto";

import Sotano from "./World/Sotano/Sotano.jsx";
import SecondFloor from "./World/SecondFloor/SecondFloor";

const Experience = () => {

    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            {/* <Fondo /> */}
            {/* <Cuarto rotation-y={-Math.PI}/> */}
            {/* <Sotano /> */}
            <SecondFloor/>
            <axesHelper args={[5]} position-y={0} />
        </>
    )

}

export default Experience;