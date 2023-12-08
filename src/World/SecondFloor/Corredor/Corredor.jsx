import { OrbitControls } from "@react-three/drei";
import Panel from "../../Sotano/Panel";
import Pantalla from "../../Sotano/Pantalla";
import Escalera from "./Escalera";
import MesaSciFi from "./MesaSciFi";
import ObjetosCorredor from "./ObjetosCorredor";
import PlatformCorredor from "./PlatformCorredor";
import WallsCorredor from "./WallsCorredor";
import { refContext } from "../../Context/refContext";
import { useContext, useEffect } from "react";
import CuadrosCorredor from "./CuadrosCorredor";
import { cameraContext } from "../../Context/cameraContext";
import { Audio, AudioListener, AudioLoader } from "three";
const Corredor = () => {
	const { camera } = useContext(cameraContext);

	const moveCamera = () => {
		camera.position.x = 5;
		camera.position.z = 9;
		camera.position.y = 6;
	};

	moveCamera();
	let sound = {};
	useEffect(() => {
		setTimeout(() => {
			sonidoDeFondo();
		}, 1000);

		return () => {
			sound.stop();
		};
	}, []);
	const sonidoDeFondo = () => {
		const listener = new AudioListener();
		//cameraRef.current.add(listener);

		// Crear una fuente de audio global
		sound = new Audio(listener);

		// Cargar un sonido y configurarlo como el buffer del objeto de audio
		const audioLoader = new AudioLoader();
		audioLoader.load("/assets/sounds/s1-ambient.mp3", (buffer) => {
			sound.setBuffer(buffer);

			sound.setVolume(0.2);
			sound.play();
		});
		sound.setLoop(true);
	};

	return (
		<>
			<OrbitControls makeDefault target={[8, 0, -4]} />
			<Escalera />
			<Panel position={[-5, 1.5, -3]} rotation-y={-Math.PI / 2} />
			<Pantalla position={[-11.8, 2, 0]} />
			<MesaSciFi />
			<CuadrosCorredor />
			<ObjetosCorredor position={[0, 0, 0]} scale={1.3} />
			<WallsCorredor />
			<PlatformCorredor />
		</>
	);
};

export default Corredor;