import Floor from "../Scene/Floor";
import Decoraciones from "../Scene/Decoraciones";
import Objetos from "./Objetos";
import Escalera from "./Escalera";
import Pantalla from "./Pantalla";
import Panel from "./Panel";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Audio, AudioListener, AudioLoader } from "three";
import { useContext, useEffect } from "react";
import { cameraContext } from "../Context/cameraContext";

const Sotano = () => {
	const { camera } = useContext(cameraContext);

	const moveCamera = () => {
		camera.position.x = 1.8;
		camera.position.z = 6.8;
		camera.position.y = 4;
	};

	moveCamera();
	const PATH = "/assets/Textures/Wood/";

	const propsTexture = useTexture({
		map: PATH + "woodColor.jpg",
	});
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
		audioLoader.load("/assets/sounds/sotano-ambient.mp3", (buffer) => {
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
				target={[0, 0, 0]}
			/>

			{/* <Fondo /> */}
			{/* <Cuarto rotation-y={-Math.PI}/> */}
			<Floor rotation-y={-Math.PI} textures={propsTexture} />
			<Floor
				rotation-y={-Math.PI}
				position={[4.7, 0.17, -3.2]}
				scale={0.2}
				textures={propsTexture}
			/>
			{/* <Decoraciones position={[0,1,1]}/> */}
			<Objetos position={[0, 0, 0]} scale={1.3} />
			<Escalera />
			<Pantalla position={[-3.9, 2, 0]} />
			<Panel />
		</>
	);
};

export default Sotano;