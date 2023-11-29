import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../Context/refContext";


const ObjetosAbuela = (props) => {
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
	// const abrirPuertaPadres = abrirPuerta(puertaPadreRef);
	// const abrirPuertaAbuela = abrirPuerta(puertaAbuelaRef);
	// const abrirPuertaSotano = abrirPuerta(puertaSotanoRef);

	/* [0, 1, 0] */

	return (
		<group {...props} dispose={null}>
			<group position={[6, 0, 3]}>
				{" "}
				{/* Cuarto de Abuela */}
				<mesh /* rotation-y={Math.PI/2} */
					castShadow
					receiveShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaAbuelaRef}
					// onClick={abrirPuertaAbuela}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			{/* Fin Puerta */}

			<group scale={1.5} rotation-y={-Math.PI / 2} position={[14.65, 0, 3.9]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.closet_001.geometry}
					material={materials.Material}
					position={[0, 0, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.closet_001.geometry}
					material={materials.Material}
					position={[1.28, 0, 0]}
				/>
			</group>

			<group scale={1.6} rotation-y={-Math.PI / 2} position={[11.8, 0, 12.3]}>
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

export default ObjetosAbuela;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");