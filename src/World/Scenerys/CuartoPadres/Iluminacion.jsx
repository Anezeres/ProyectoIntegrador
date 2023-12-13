import { PointLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useMemo, useRef } from 'react';
import { SpotLight } from 'three'

const Iluminacion = () => {
	const spotLightRef1 = useRef();
	const spotlight1 = useMemo(() => new SpotLight("#fff"), []);

	// useHelper(spotLightRef1, SpotLightHelper);

	return (
		<>
			<group>
				<primitive
					object={spotlight1}
					ref={spotLightRef1}
					position={[-8, 7, 8]}
					angle={Math.PI / 1.5}
					intensity={150}
					color={"white"}
					penumbra={1}
					distance={12}
					castShadow
				/>
				<primitive object={spotlight1.target} position={[-8, 0, 8]} />
			</group>
		</>
	);
}

export default Iluminacion;