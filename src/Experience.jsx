import { KeyboardControls, OrbitControls } from "@react-three/drei"
import Fondo from "./Fondo";
import { AxesHelper } from "three";
import Cuarto from "./World/Cuarto";

import Sotano from "./World/Sotano/Sotano.jsx";
import SecondFloor from "./World/SecondFloor/SecondFloor";
import RefContext from "./World/Context/RefContext.jsx";
import Personajes from "./World/Personajes/Personajes";
import Controls from "./World/Controls/Controls";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Children, useEffect, useState } from "react";
import CharacterContext from "./World/Context/CharacterContext.jsx";
import CameraContext from "./World/Context/CameraContext.jsx";
import TimeLine from "./Story/TimeLine.jsx";

const Experience = () => {

    const [loaded, setLoaded] = useState(false);
    const [loadedCharaters, setLoadedCharacters] = useState(false);

    useEffect(() => {
        // Simula una carga asíncrona (puede ser una petición de red, etc.)
        setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                setLoadedCharacters(true);
            }, 10);
        }, 10); // Simulamos una carga de 2 segundos
    }, []);

    return (
        <>
            <CharacterContext>
                <CameraContext>
                    <Physics>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={2} />
                        <SecondFloor/>
                        {/* <axesHelper args={[5]} position={[0, 0, 0]} /> */}
                        {loaded && <Personajes />}
                        {loaded && <Controls />}
                        {loadedCharaters && <TimeLine/>}
                    </Physics>
                </CameraContext>
            </CharacterContext>
        </>
    )
}

export default Experience;