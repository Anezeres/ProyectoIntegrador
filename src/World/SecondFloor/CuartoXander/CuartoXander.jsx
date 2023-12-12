import Arcade from "./Arcade";
import Basura from "./Basura";
import Computador from "./Computador";

import MesaControl from "./MesaControl";
import ObjetosXander from "./ObjetosXander";
import PlatformXander from "./PlatformXander";
import WallsXander from "./WallsXander";
import { OrbitControls, useTexture } from "@react-three/drei";
import { cameraContext } from "../../Context/cameraContext";
import { useContext, useEffect } from "react";
import SillaG from "./SillaG";
import Monitor from "./Monitor";
import Laptop from "./Laptop";
import ObjetosMoverXander from "./ObjetosMoverXander";
import Cuadro from "../../Scene/Cuadro";
import useSound from "use-sound";
import Iluminacion from "./Iluminacion";
import { } from 'three';

const CuartoXander = () => {



	const [playSound] = useSound("assets/sounds/ambient.mp3", {
		volume: 0.1,
		loop: true,
	});

	const PATH = "/assets/Textures/Cuadros/";

	const pintura = useTexture({
		map: PATH + "Astronauta.png",
	});

	const { camera } = useContext(cameraContext);

	const moveCamera = () => {
		console.log(camera);
		camera.position.x = -12;
		camera.position.z = 2;
		camera.position.y = 6;
	};

	moveCamera();

	useEffect(() => {
		playSound();
	}, []);

	return (
		<>
			<OrbitControls makeDefault target={[-12, 0, -8]} />
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
			<Iluminacion />

		</>
	);
};


export default CuartoXander;