import { PointLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useMemo, useRef } from 'react';
import { SpotLight } from 'three'

const Iluminacion = () => {

    const spotLightRef1 = useRef()
    const spotLightRef2 = useRef()


    const spotlight1 = useMemo(() => new SpotLight('#fff'), []);
    const spotlight2 = useMemo(() => new SpotLight('#fff'), []);


    //useHelper(spotLightRef1, SpotLightHelper);
    //useHelper(spotLightRef2, SpotLightHelper);


    return (
        <>
            <group>
                <primitive
                    object={spotlight1}
                    ref={spotLightRef1}
                    position={[0, 7, 0]}
                    angle={Math.PI / 3}
                    intensity={250}
                    color={"white"}
                    penumbra={1}
                    distance={8}
                    castShadow
                />
                <primitive object={spotlight1.target} position={[0, 0, 0]} />
            </group>

            <group>
                <primitive
                    object={spotlight2}
                    ref={spotLightRef2}
                    position={[8, 8, 0]}
                    angle={Math.PI / 3}
                    intensity={500}
                    color={"cyan"}
                    penumbra={1}
                    distance={10}
                    castShadow
                />
                <primitive object={spotlight2.target} position={[8, 0, 0]} />
            </group>
        </>
    );


}

export default Iluminacion;