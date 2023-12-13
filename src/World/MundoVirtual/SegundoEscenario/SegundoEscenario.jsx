import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect } from "react";
import { cameraContext } from "../../../Context/cameraContext";
import PlatformSegundoEsc from "./PlatformSegundoEsc";
import WallsSegundoEsc from "./WallsSegundoEsc";
import Carrito from "./Carrito";
import Drone from "./Drone";
import Iluminacion from "./Iluminacion";
import { Audio, AudioListener, AudioLoader } from "three";

const SegundoEscenario = () => {
	const { camera } = useContext(cameraContext);
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

	return (
		<>
			<OrbitControls
				enableRotate={false}
				enablePan={false}
				enableZoom={false}
				makeDefault
				target={[0, 2, 0]}
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