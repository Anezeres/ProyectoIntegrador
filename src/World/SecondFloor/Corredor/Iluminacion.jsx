import { PointLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useMemo, useRef } from 'react';
import { SpotLight } from 'three'

const Iluminacion = () => {

    const spotLightRef1 = useRef()
	const spotLightRef2 = useRef()
	const spotLightRef3 = useRef()


	const spotlight1 = useMemo(() => new SpotLight('#fff'), []);
	const spotlight2 = useMemo(() => new SpotLight('#fff'), []);
	const spotlight3 = useMemo(() => new SpotLight('#fff'), []);


	//useHelper(spotLightRef1, SpotLightHelper);
	//useHelper(spotLightRef2, SpotLightHelper);
	//useHelper(spotLightRef3, SpotLightHelper);

    return (
        <>
            <group>
                <primitive
                    object={spotlight1}
                    ref={spotLightRef1}
                    position={[-9, 7, 0]}
                    angle={Math.PI / 1.5}
                    intensity={150}
                    color={"white"}
                    penumbra={1}
                    distance={12}
                    castShadow
                />
                <primitive object={spotlight1.target} position={[-9, 0, 0]} />
            </group>

            <group>
                <primitive
                    object={spotlight2}
                    ref={spotLightRef2}
                    position={[5, 7, 0]}
                    angle={Math.PI / 1.5}
                    intensity={150}
                    color={"white"}
                    penumbra={1}
                    distance={12}
                    castShadow
                />
                <primitive object={spotlight2.target} position={[5, 0, 0]} />
            </group>
            <group>
                <primitive
                    object={spotlight3}
                    ref={spotLightRef3}
                    position={[12, 7, -8]}
                    angle={ Math.PI / 1.5}
                    intensity={150}
                    color={"white"}
                    penumbra={1}
                    distance={12}
                    castShadow
                />
                <primitive object={spotlight3.target} position={[12, 0, -8]} />
            </group>
        </>
    );


}

export default Iluminacion;