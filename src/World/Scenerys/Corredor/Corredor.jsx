import { OrbitControls } from "@react-three/drei";
import Panel from "../Sotano/Panel";
import Pantalla from "../Sotano/Pantalla";
import Escalera from "./Escalera";
import MesaSciFi from "./MesaSciFi";
import ObjetosCorredor from "./ObjetosCorredor";
import PlatformCorredor from "./PlatformCorredor";
import WallsCorredor from "./WallsCorredor";
import { refContext } from "../../../Context/refContext";
import { useContext, useEffect, useState } from "react";
import CuadrosCorredor from "./CuadrosCorredor";
import { cameraContext } from "../../../Context/cameraContext";
import { Audio, AudioListener, AudioLoader, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import Iluminacion from "./Iluminacion";

const Corredor = () => {
	const { camera } = useContext(cameraContext);
	const { storyProgress } = useContext(refContext)

	const [moviendoCamara, setMoviendo] = useState(false);
	const [target, setTarget] = useState([8, 0, -4]);
    let [zVelocidad, setZVelocidad] = useState(0.0002);
	const [posicionFinal, setPosicionFinal] = useState({ x: 11, y: 3, z: -3.5 });
	const moveCamera = () => {
		camera.position.x = -10;
		camera.position.z = 2;
		camera.position.y = 4;
	};

	let sound = {};
	useEffect(() => {
		moveCamera();

		setTimeout(() => {
			sonidoDeFondo();
		}, 1000);

		setTimeout(() => {
			setMoviendo(true);
			setTarget([13, 0.33, -6]);
		}, 2500);
		setTimeout(() => {
			setZVelocidad(0.005);
		}, 22000);

		return () => {
			sound.stop();
		};
	}, []);

	useEffect(() => {
		//console.log("storyProgress.currentLevel: ", storyProgress.currentLevel)
		//console.log("storyProgress.scenery: ", storyProgress.scenery)
		//console.log("storyProgress.currentStep: ", storyProgress.currentStep)
		if (
			storyProgress.currentStep == 1 &&
			storyProgress.currentLevel == 1 &&
			storyProgress.scenery == "s2"
		) {
			//movera la camara en "Listo abuela, aqui esta, espero te gusto" o cerca
			setTarget([6, 0.33, -6]);
			setPosicionFinal({ ...posicionFinal, x: 8, z: -1 });
		}
	}, [storyProgress.currentLevel, storyProgress.currentStep]);

	useFrame((state) => {
		// salsa posicion [13, 0.33, -6]
		if (moviendoCamara) {
			state.camera.position.x = MathUtils.lerp(
				state.camera.position.x,
				posicionFinal.x,
				0.0015
			);
			state.camera.position.y = MathUtils.lerp(
				state.camera.position.y,
				posicionFinal.y,
				0.005
			);

			state.camera.position.z = MathUtils.lerp(
				state.camera.position.z,
				posicionFinal.z,
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
					target={target}
				/>
				<Escalera />
				<Panel position={[-5, 1.5, -3]} rotation-y={-Math.PI / 2} />
				<Pantalla position={[-11.8, 2, 0]} />
				<MesaSciFi />
				<CuadrosCorredor />
				<ObjetosCorredor position={[0, 0, 0]} scale={1.3} />
				<WallsCorredor />
				<PlatformCorredor />
				<Iluminacion />
			</>
		);
};

export default Corredor;