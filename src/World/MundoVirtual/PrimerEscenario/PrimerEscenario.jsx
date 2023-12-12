import { OrbitControls } from "@react-three/drei";
import WallsPrimerEsc from "./WallsPrimerEsc";
import PlatformPrimerEsc from "./PlatformPrimerEsc";
import { useContext, useEffect, useState } from "react";
import { cameraContext } from "../../../Context/cameraContext";
import PuertaSciFi from "./PuertaSciFi";
import Capsula from "./Capsula";
import Cubos from "./Cubos";
import { Audio, AudioListener, AudioLoader, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
const PrimerEscenario = () => {
	const { camera } = useContext(cameraContext);
	const [moviendoCamara, setMoviendo] = useState(false);
	const [target, setTarget] = useState([0, 2, 0]);
	let [zVelocidad, setZVelocidad] = useState(0.0002);

	useEffect(() => {
		moveCamera();

		setTimeout(() => {
			sonidoDeFondo();
		}, 1000);

		setTimeout(() => {
			setMoviendo(true);
			setTarget([4, 2, 0]);
		}, 20000);
		setTimeout(() => {
			setZVelocidad(0.005);
		}, 22000);

		return () => {
			sound.stop();
		};
	}, []);

	useFrame((state) => {
		// salsa posicion [13, 0.33, -6]
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				4,
				0.004
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				3,
				0.005
			);

			state.camera.position.z = MathUtils.lerp(
				state.camera.position.z,
				8,
				zVelocidad
			);
		}
	});
	const moveCamera = () => {
		camera.position.x = -16;
		camera.position.z = 0;
		camera.position.y = 4;
	};

	let sound = {};
	const sonidoDeFondo = () => {
		const listener = new AudioListener();
		//cameraRef.current.add(listener);

		// Crear una fuente de audio global
		sound = new Audio(listener);

		// Cargar un sonido y configurarlo como el buffer del objeto de audio
		const audioLoader = new AudioLoader();
		audioLoader.load("/assets/sounds/virtual-ambient.m4a", (buffer) => {
			sound.setBuffer(buffer);

			sound.setVolume(0.3);
			sound.play();
		});
		sound.setLoop(true);
	};

	return (
		<>
			<OrbitControls makeDefault target={target} />
			<PlatformPrimerEsc />
			<PuertaSciFi />
			<Capsula />
			<Cubos />
			<WallsPrimerEsc />
		</>
	);
};

export default PrimerEscenario;