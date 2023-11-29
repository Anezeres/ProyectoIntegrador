import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../Context/refContext";


const ObjetosPadres = (props) => {
	const { nodes, materials } = useGLTF(
		"/assets/Models/Decoraciones/ObjetosHogar.glb"
	);
	const { moveObjectToPositionSmoothly, abrirPuerta } = useContext(refContext);

	const objetoRef = useRef();
	const cameraRef = useRef();

	const puertaXanderRef = useRef();
	const puertaPadreRef = useRef();
	const puertaAbuelaRef = useRef();
	const puertaSotanoRef = useRef();

	useHelper(objetoRef, BoxHelper);

	const moverCamara = () => {
		moveObjectToPositionSmoothly(
			cameraRef,
			[0, 0.36, -0.8],
			800,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			false
		);
	};

	// const abrirPuertaXander = abrirPuerta(puertaXanderRef);
	// // const abrirPuertaPadres = abrirPuerta(puertaPadreRef);
	// const abrirPuertaAbuela = abrirPuerta(puertaAbuelaRef);
	// const abrirPuertaSotano = abrirPuerta(puertaSotanoRef);

	/* [0, 1, 0] */

	return (
		<group {...props} dispose={null}>
			<group position={[-6, 0, 3]}>
				{" "}
				{/* Cuarto de Padres */}
				<mesh /* rotation-y={Math.PI/2} */
					castShadow
					receiveShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaPadreRef}
					// onClick={abrirPuertaPadres}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			<group scale={1.6} rotation-y={Math.PI / 2} position={[-5.8, 0, 4.21]}>
				{/* Cama */}
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.bed_001.geometry}
					material={materials.Material}
					position={[-2.582, -0.004, -1.005]}
				/>
			</group>
		</group>
	);
}

export default ObjetosPadres;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");