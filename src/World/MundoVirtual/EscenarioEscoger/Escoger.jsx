import { OrbitControls } from "@react-three/drei";

import { useContext, useEffect, useState } from "react";
import PuertaSciFi from "./PuertaSciFi";
import PlatformEscoger from "./PlatformEscoger";
import WallsEscoger from "./WallsEscoger";
import ObjetosEscoger from "./ObjetosEscoger";
import TextoEscoger from "./TextoEscoger";
import { cameraContext } from "../../../Context/cameraContext";
import Iluminacion from "./Iluminacion";
import { Audio, AudioListener, AudioLoader, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { refContext } from "../../../Context/refContext";
const Escoger = () => {
	const { camera } = useContext(cameraContext);
	const { storyProgress } = useContext(refContext);

	const [moviendoCamara, setMoviendo] = useState(false);
	const [target, setTarget] = useState([0, 0, -4]);
	let [zVelocidad, setZVelocidad] = useState(0.002);
	const moveCamera = () => {
		camera.position.x = -3;
		camera.position.z = 7;
		camera.position.y = 6;
	};

	let sound = {};
	useEffect(() => {
		moveCamera();

		setTimeout(() => {
			sonidoDeFondo();
		}, 1000);

		return () => {
			sound.stop();
		};
	}, []);

	useEffect(() => {
		//console.log("storyProgress.currentLevel: ", storyProgress.currentLevel)
		//console.log("storyProgress.scenery: ", storyProgress.scenery)
		//console.log("storyProgress.currentStep: ", storyProgress.currentStep)
		if (
			storyProgress.currentStep == 0 &&
			storyProgress.currentLevel == 1 &&
			storyProgress.scenery == "s5"
		) {
			setMoviendo(true);
			setTarget([4.2, 0.33, -5]);
		}

	}, [storyProgress.currentLevel, storyProgress.currentStep]);

	useFrame((state) => {
		// salsa posicion [13, 0.33, -6]
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				4.2,
				0.003
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				3,
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
		audioLoader.load("/assets/sounds/decide.mp3", (buffer) => {
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
			<PlatformEscoger />
			<PuertaSciFi />
			<WallsEscoger />
			<ObjetosEscoger />
			<TextoEscoger />
			<Iluminacion />
		</>
	);
};

export default Escoger;