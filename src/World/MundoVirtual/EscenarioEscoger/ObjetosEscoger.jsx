import React, { useContext, useRef, useState } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { cameraContext } from "../../Context/cameraContext";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { refContext } from "../../Context/refContext";

const ObjetosEscoger = (props) => {
	const { nodes, materials } = useGLTF(
		"/assets/Models/Decoraciones/ObjetosHogar.glb"
	);
	const { moveObjectToPositionSmoothly, abrirPuerta } =
		useContext(cameraContext);
	const { storyProgress, updateStoryProgress } = useContext(refContext);
	const [countObjectsMoved, setMoved] = useState(0);
	const objetoRef = useRef();

	const puertaXanderRef = useRef();

	useHelper(objetoRef, BoxHelper);

	function updateCount(n) {
		setMoved(n);
		if (n == 5) {
			updateStoryProgress({
				missionDone: true,
			});
		}
	}

	const abrirPuertaCasa = abrirPuerta(puertaXanderRef);

	/* [0, 1, 0] */

	return (
		<group {...props} rotation-y={Math.PI/2} dispose={null}>

			<group position={[0, 0, -4]}>
				{" "}
				{/* Cuarto Xander  */}
				<mesh /* rotation-y={Math.PI/2} */
					castShadow
					receiveShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaXanderRef}
					onClick={abrirPuertaCasa}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

	

		</group>
	);
};

export default ObjetosEscoger;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");
