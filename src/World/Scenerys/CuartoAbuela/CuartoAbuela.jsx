import ObjetosAbuela from "./ObjetosAbuela";
import PlatformAbuela from "./PlatformAbuela";
import WallsAbuela from "./WallsAbuela";
import { refContext } from "../../../Context/refContext";
import { useContext, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Huawei from "./Huawei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import Iluminacion from "./Iluminacion";
import { cameraContext } from "../../../Context/cameraContext";

const CuartoAbuela = () => {
	const { camera } = useContext(cameraContext);
	const { storyProgress } = useContext(refContext);
	const [target, setTarget] = useState([12, 4, 8]);
	const [moviendoCamara, setMoviendoCamara] = useState(false);

	useEffect(() => {
		//console.log("storyProgress.currentLevel: ", storyProgress.currentLevel)
		//console.log("storyProgress.scenery: ", storyProgress.scenery)
		//console.log("storyProgress.currentStep: ", storyProgress.currentStep)
		if (
			storyProgress.currentStep == 0 &&
			storyProgress.currentLevel == 2 &&
			storyProgress.scenery == "s3"
		) {
			setMoviendoCamara(true);
			setTarget([9, 1.5, 5.6]);
		}
	}, [storyProgress.currentLevel, storyProgress.currentStep]);
	useEffect(() => {
		moveCamera();
	}, []);
	useFrame((state) => {
		// Xander posicion [9, 2, 5]
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				4,
				0.004
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				3.1,
				0.0005
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
			<Iluminacion />
		</>
	);
};

export default CuartoAbuela;