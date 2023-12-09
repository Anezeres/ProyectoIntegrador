import Arcade from "./Arcade";
import Basura from "./Basura";
import Computador from "./Computador";

import MesaControl from "./MesaControl";
import ObjetosXander from "./ObjetosXander";
import PlatformXander from "./PlatformXander";
import WallsXander from "./WallsXander";
import { useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { cameraContext } from "../../Context/cameraContext";
import { useContext, useEffect } from "react";
import SillaG from "./SillaG";
import Monitor from "./Monitor";
import Laptop from "./Laptop";
import ObjetosMoverXander from "./ObjetosMoverXander";
import { RigidBody } from "@react-three/rapier";
import Cuadro from "../../Scene/Cuadro";
import useSound from "use-sound";
import { Audio, AudioListener, AudioLoader } from "three";

const CuartoXander = () => {
	const PATH = "/assets/Textures/Cuadros/";

	const pintura = useTexture({
		map: PATH + "Astronauta.png",
	});

	const { camera } = useContext(cameraContext);

	const moveCamera = () => {
		console.log(camera);
		camera.position.x = -18.5;
		camera.position.z = -3.5;
		camera.position.y = 5.5;
	};
	//aqwuiuio
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
			<OrbitControls
				enableRotate={false}
				enablePan={false}
				enableZoom={false}
				makeDefault
				target={[-13, 0, -11]}
			/>
			<Computador />
			<Arcade />
			<Basura />
			<MesaControl />
			<ObjetosXander position={[0, 0, 0]} scale={1.3} />
			<ObjetosMoverXander position={[0, 0, 0]} scale={1.3} />
			<WallsXander />
			<Cuadro textures={pintura} position={[-8, 0, -7.81]} />
			{/* <Cuadro textures={pintura} position={[-8,3,-7.81]}/> */}
			<SillaG />
			<Monitor />
			<Laptop />
			<PlatformXander />
		</>
	);
};


export default CuartoXander;