import { PointLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useMemo, useRef } from 'react';
import { SpotLight } from 'three'

const Iluminacion = () => {

    const spotLightRef1 = useRef()
    const spotLightRef2 = useRef()
    // const pointLightRef1 = useRef()
    // const pointLightRef2 = useRef()
    // const pointLightRef3 = useRef()
    // const pointLightRef4 = useRef()
    // const pointLightRef5 = useRef()


    const spotlight1 = useMemo(() => new SpotLight('#fff'), []);
    const spotlight2 = useMemo(() => new SpotLight('#fff'), []);


    //useHelper(spotLightRef1, SpotLightHelper);
    //useHelper(spotLightRef2, SpotLightHelper);
    // useHelper(pointLightRef1, PointLightHelper, 1, 'white')
    // useHelper(pointLightRef2, PointLightHelper, 1, 'white');
    // useHelper(pointLightRef3, PointLightHelper, 1, 'white');
    // useHelper(pointLightRef4, PointLightHelper, 1, 'white');
    // useHelper(pointLightRef5, PointLightHelper, 1, 'white');


    return (
        <>
            <group>
                <primitive
                    object={spotlight1}
                    ref={spotLightRef1}
                    position={[-16, 7, -8]}
                    angle={Math.PI / 3}
                    intensity={500}
                    color={"white"}
                    penumbra={1}
                    distance={8}
                    castShadow
                />
                <primitive object={spotlight1.target} position={[-16, 0, -8]} />
            </group>

            <group>
                <primitive
                    object={spotlight2}
                    ref={spotLightRef2}
                    position={[-8, 7, -8]}
                    angle={Math.PI / 3}
                    intensity={500}
                    color={"white"}
                    penumbra={1}
                    distance={8}
                    castShadow
                />
                <primitive object={spotlight2.target} position={[-8, 0, -8]} />
            </group>

            {/* <pointLight
                ref={pointLightRef1}
                position={[-16, 4, -8]}
                intensity={4}
                color={"orange"}
            />
            <pointLight
                ref={pointLightRef2}
                position={[-8, 4, -8]}
                intensity={4}
                color={"orange"}
            />

            <pointLight
                ref={pointLightRef1}
                position={[-9, 0, 0]}
                intensity={4}
                color={"orange"}
            />
            <pointLight
                ref={pointLightRef2}
                position={[0, 0, 0]}
                intensity={4}
                color={"orange"}
            />
            <pointLight
                ref={pointLightRef1}
                position={[-9, 0, 0]}
                intensity={4}
                color={"orange"}
            /> */}
        </>
    );


}

export default Iluminacion;