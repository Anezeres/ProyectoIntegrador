import { PointLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useMemo, useRef } from 'react';
import { SpotLight } from 'three'

const Iluminacion = () => {

    const spotLightRef1 = useRef()


    const spotlight1 = useMemo(() => new SpotLight('#fff'), []);


    //useHelper(spotLightRef1, SpotLightHelper);


    return (
        <>
            <group>
                <primitive
                    object={spotlight1}
                    ref={spotLightRef1}
                    position={[0, 7, 0]}
                    angle={Math.PI / 3}
                    intensity={100}
                    color={"red"}
                    penumbra={1}
                    distance={8}
                    castShadow
                />
                <primitive object={spotlight1.target} position={[0, 0, 0]} />
            </group>

        </>
    );


}

export default Iluminacion;