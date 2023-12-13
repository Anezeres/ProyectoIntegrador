import ObjetosPadres from "./ObjetosPadres";
import PlatformPadres from "./PlatformPadres";
import { OrbitControls } from "@react-three/drei";
import Iluminacion from "./Iluminacion";
import { useContext, useEffect } from "react";
import { cameraContext } from "../../../Context/cameraContext";
import { Audio, AudioListener, AudioLoader } from "three";
import { Juanda } from "./tapaq/Juanda";
import { Sebastian } from "./tapaq/Sebastian";
import { Juanpa } from "./tapaq/Juanpa";
import { Julian } from "./tapaq/Julian";
import { useFrame } from "@react-three/fiber";
import { Mochila } from "./tapaq/mochila";
import { Brayan } from "./tapaq/Brayan";

const CuartoPadres = () => {
	const { camera } = useContext(cameraContext);

	const moveCamera = () => {
		camera.position.x = -8.23882860249152;
		camera.position.z = 11.85;
		camera.position.y = 4.49;
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
		audioLoader.load("/assets/sounds/tapaq-song.mp3", (buffer) => {
			sound.setBuffer(buffer);

			sound.setVolume(0.3);
			sound.play();
		});
		sound.setLoop(true);
	};

	useFrame((state) => {
		// console.log(state.camera.position);
		// {
		// 	"x": -8.23882860249152,
		// 	"y": 4.494444549909815,
		// 	"z": 13.858267486240642
		// }
	});

	return (
		<>
			<ambientLight />
			<OrbitControls makeDefault target={[-8, 0, 8]} />
			<ObjetosPadres position={[0, 0, 0]} scale={1.3} />
			<PlatformPadres />
			<Juanda position={[-8, 0.3, 8]} scale={1.6} />
			<Sebastian position={[-6, 0.3, 8]} scale={1.55} />
			<Juanpa position={[-10, 0.3, 8]} scale={1.68} />
			<Julian position={[-9, 0.3, 6]} scale={1.55} />
			<Brayan position={[-6.5, 0.3, 6]} scale={1.55} />
			<Mochila scale={0.005} position={[-11, 0.9, 10]} />
			<Iluminacion />
		</>
	);
};

export default CuartoPadres;