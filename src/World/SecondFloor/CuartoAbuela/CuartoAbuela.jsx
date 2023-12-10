import ObjetosAbuela from "./ObjetosAbuela";
import PlatformAbuela from "./PlatformAbuela";
import WallsAbuela from "./WallsAbuela";
import { refContext } from "../../Context/refContext";
import { useContext, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { cameraContext } from "../../Context/cameraContext";
import Huawei from "./Huawei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const CuartoAbuela = () => {
	const { camera } = useContext(cameraContext);
	const [target, setTarget] = useState([12, 4, 8]);
	const [moviendoCamara, setMoviendo] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setMoviendo(true);
			setTarget([9, 2, 5]);
		}, 7000);
	}, []);
	useFrame((state) => {
		// zander posicion [9, 2, 5]
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				8,
				0.009
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				3.1,
				0.005
			);
			state.camera.position.z = MathUtils.lerp(
				state.camera.position.z,
				6,
				0.02
			);
		}
	});
	const moveCamera = () => {
		camera.position.x = -1;
		camera.position.z = 9;
		camera.position.y = 3;
	};

	moveCamera();

	return (
		<>
			<OrbitControls
				enableRotate={false}
				enablePan={false}
				enableZoom={false}
				makeDefault
				target={target}
			/>
			<ObjetosAbuela position={[0, 0, 0]} scale={1.3} />
			<PlatformAbuela />
			<WallsAbuela />
			<Huawei />
		</>
	);
};

export default CuartoAbuela;