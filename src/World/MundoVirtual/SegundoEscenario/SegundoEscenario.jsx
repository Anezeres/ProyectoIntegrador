import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect, useState } from "react";
import { cameraContext } from "../../../Context/cameraContext";
import PlatformSegundoEsc from "./PlatformSegundoEsc";
import WallsSegundoEsc from "./WallsSegundoEsc";
import Carrito from "./Carrito";
import Drone from "./Drone";
import Iluminacion from "./Iluminacion";
import { Audio, AudioListener, AudioLoader, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { refContext } from "../../../Context/refContext";

const SegundoEscenario = () => {
	const { camera } = useContext(cameraContext);
	const { storyProgress } = useContext(refContext);
	const [moviendoCamara, setMoviendo] = useState(false);
	const [target, setTarget] = useState([0, 2, 0]);
	let [zVelocidad, setZVelocidad] = useState(0.0005);

	useEffect(() => {
		sonidoDeFondo();
		moveCamera();
		return () => {
			sound.stop();
		};
	}, []);
	let sound = {};
	const sonidoDeFondo = () => {
		const listener = new AudioListener();
		//cameraRef.current.add(listener);

		// Crear una fuente de audio global
		sound = new Audio(listener);

		// Cargar un sonido y configurarlo como el buffer del objeto de audio
		const audioLoader = new AudioLoader();
		audioLoader.load("/assets/sounds/ambient.mp3", (buffer) => {
			sound.setBuffer(buffer);

			sound.setVolume(0.3);
			sound.play();
		});
		sound.setLoop(true);
	};

	const moveCamera = () => {
		camera.position.x = 0;
		camera.position.y = 6;
		camera.position.z = 7.5;
	};

	useEffect(() => {
		//console.log("storyProgress.currentLevel: ", storyProgress.currentLevel)
		//console.log("storyProgress.scenery: ", storyProgress.scenery)
		//console.log("storyProgress.currentStep: ", storyProgress.currentStep)
		if (
			storyProgress.currentStep == 0 &&
			storyProgress.currentLevel == 2 &&
			storyProgress.scenery == "s8"
		) {
			setMoviendo(true);
			setTarget([0, 2, -3]);
		}
		if (
			storyProgress.currentStep == 1 &&
			storyProgress.currentLevel == 2 &&
			storyProgress.scenery == "s8"
		) {
			setZVelocidad(0.005);
		}
	}, [storyProgress.currentLevel, storyProgress.currentStep]);

	useFrame((state) => {
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				5,
				0.004
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				3,
				0.005
			);

			state.camera.position.z = MathUtils.lerp(
				state.camera.position.z,
				-2,
				zVelocidad
			);
		}
	});

	return (
		<>
			<OrbitControls
				enableRotate={false}
				enablePan={false}
				enableZoom={false}
				makeDefault
				target={target}
			/>
			<PlatformSegundoEsc />
			<Carrito />
			<Drone />

			<WallsSegundoEsc />
			<Iluminacion />
		</>
	);
};

export default SegundoEscenario;