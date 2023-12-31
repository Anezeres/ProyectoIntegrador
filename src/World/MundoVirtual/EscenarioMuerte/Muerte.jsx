import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect, useState } from "react";
import PlatformMuerte from "./PlatformMuerte";
import WallsMuerte from "./WallsMuerte";
import Computer from "./Computador";
import SciFiChair from "./SciFiChair";
import { cameraContext } from "../../../Context/cameraContext";
import Iluminacion from "./Iluminacion";
import { Audio, AudioListener, AudioLoader, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { refContext } from "../../../Context/refContext";

const Muerte = () => {
	const { camera } = useContext(cameraContext);
	const { storyProgress } = useContext(refContext)

	const [moviendoCamara, setMoviendo] = useState(false);
	const [target, setTarget] = useState([2, 1, 0]);
	let [zVelocidad, setZVelocidad] = useState(0.002);
	const moveCamera = () => {
		camera.position.x = -6;
		camera.position.z = 0;
		camera.position.y = 3;
	};

	let sound = {};
	useEffect(() => {
		moveCamera();

		setTimeout(() => {
			sonidoDeFondo();
		}, 1000);

		// setTimeout(() => {
		// 	setZVelocidad(0.005);
		// }, 22000);

		return () => {
			sound.stop();
		};
	}, []);

	useEffect(() => {
		console.log("storyProgress.currentLevel: ", storyProgress.currentLevel)
		console.log("storyProgress.scenery: ", storyProgress.scenery)
		console.log("storyProgress.currentStep: ", storyProgress.currentStep)
		if (
			storyProgress.currentStep == 0 &&
			storyProgress.currentLevel == 1 &&
			storyProgress.scenery == "s6"
		) {
			setMoviendo(true);
		}

	}, [storyProgress.currentLevel, storyProgress.currentStep]);

	useFrame((state) => {
		// salsa posicion [13, 0.33, -6]
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				1,
				0.003
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				2.5,
				0.005
			);

			state.camera.position.z = MathUtils.lerp(
				state.camera.position.z,
				4,
				zVelocidad
			);
		}
	});
	const sonidoDeFondo = () => {
		const listener = new AudioListener();
		//cameraRef.current.add(listener);

		// Crear una fuente de audio global
		sound = new Audio(listener);

		// Cargar un sonido y configurarlo como el buffer del objeto de audio
		const audioLoader = new AudioLoader();
		audioLoader.load("/assets/sounds/sad.mp3", (buffer) => {
			sound.setBuffer(buffer);

			sound.setVolume(0.2);
			sound.play();
		});
		sound.setLoop(true);
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
			<PlatformMuerte />
			<WallsMuerte />
			<Computer />
			<SciFiChair />
			<Iluminacion />
		</>
	);
};

export default Muerte;