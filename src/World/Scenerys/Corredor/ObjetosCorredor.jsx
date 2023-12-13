import React, { useContext, useRef, useState } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { cameraContext } from "../../../Context/cameraContext";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { refContext } from "../../../Context/refContext";

const Objetos = (props) => {
	const { nodes, materials } = useGLTF(
		"/assets/Models/Decoraciones/ObjetosHogar.glb"
	);
	const { moveObjectToPositionSmoothly, abrirPuerta } =
		useContext(cameraContext);
	const { storyProgress, updateStoryProgress } = useContext(refContext);
	const [countObjectsMoved, setMoved] = useState(0);
	const objetoRef = useRef();
	const cameraRef = useRef();

	const salsaRef = useRef();
	const salsaRef2 = useRef();
	const salsaRef3 = useRef();
	const dulcesRef = useRef();

	const puertaXanderRef = useRef();
	const puertaPadreRef = useRef();
	const puertaAbuelaRef = useRef();
	const puertaSotanoRef = useRef();

	useHelper(objetoRef, BoxHelper);

	function updateCount(n) {
		setMoved(n);
		if (n == 5) {
			updateStoryProgress({
				missionDone: true,
			});
		}
	}

	const moverCamara = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			cameraRef,
			[2.9, 0, -0.8],
			800,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			false
		);
		updateCount(countObjectsMoved + 1);
	};

	const moverSalsaTomate = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			salsaRef,
			[3.5, 2, -8.7],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		updateCount(countObjectsMoved + 1);
	};

	const moverSalsaTomate2 = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			salsaRef2,
			[3.5, 2, -8.7],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		updateCount(countObjectsMoved + 1);
	};

	const moverSalsaTomate3 = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			salsaRef3,
			[3.5, 2, -8.7],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		updateCount(countObjectsMoved + 1);
	};

	const moverDulces = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			dulcesRef,
			[2.3, 0.77, -3],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		updateCount(countObjectsMoved + 1);
	};

	const abrirPuertaXander = abrirPuerta(puertaXanderRef);
	const abrirPuertaPadres = abrirPuerta(puertaPadreRef);
	const abrirPuertaAbuela = abrirPuerta(puertaAbuelaRef);
	const abrirPuertaSotano = abrirPuerta(puertaSotanoRef);

	/* [0, 1, 0] */

	return (
		<group {...props} dispose={null}>
			<group scale={2} position={[9, 0.5, -4.9]}>
				{/* Camara */}
				<mesh
					onPointerEnter={() => (document.body.style.cursor = "pointer")}
					onPointerLeave={() => (document.body.style.cursor = "auto")}
					castShadow
					geometry={nodes.camera_001.geometry}
					material={materials.Material}
					rotation={[0, -Math.PI / 2, 0]}
					ref={cameraRef}
					onClick={(e) => moverCamara(e)}
					scale={1.2}
				/>
			</group>

			{/* Puerta */}
			<group position={[12, 0, -9]}>
				{" "}
				{/* Entrada Casa */}
				<mesh
					castShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
				<mesh
					castShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			<group position={[1, 0, 3]}>
				{" "}
				{/* Cuarto Sotano */}
				<mesh
					castShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaSotanoRef}
					onClick={abrirPuertaSotano}
				/>
				<mesh
					castShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			<group position={[-6, 0, -3]}>
				{" "}
				{/* Cuarto Xander  */}
				<mesh
					castShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaXanderRef}
					onClick={abrirPuertaXander}
				/>
				<mesh
					castShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			<group position={[-6, 0, 3]}>
				{" "}
				{/* Cuarto de Padres */}
				<mesh
					castShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaPadreRef}
					onClick={abrirPuertaPadres}
				/>
				<mesh
					castShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			<group position={[6, 0, 3]}>
				{" "}
				{/* Cuarto de Abuela */}
				<mesh
					castShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaAbuelaRef}
					onClick={abrirPuertaAbuela}
				/>
				<mesh
					castShadow
					geometry={nodes.door_frame_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
				/>
			</group>

			{/* Fin Puerta */}

			{/* Lavamanos */}

			<group rotation-y={Math.PI / 2} scale={1.1}>
				<mesh
					receiveShadow
					geometry={nodes.kitchen_table_001.geometry}
					material={materials.Material}
					position={[6, 0.14, 3.22]}
				/>
			</group>

			{/* Lavaplatos */}

			<group rotation-y={Math.PI / 2}>
				<mesh
					receiveShadow
					geometry={nodes.kitchen_sink_001.geometry}
					material={materials.Material}
					position={[4.6, 0.14, 3.5]}
				/>
			</group>

			{/* Nevera */}
			<group rotation-y={Math.PI / 2} scale={1.3}>
				<mesh
					castShadow
					geometry={nodes.fridge_001.geometry}
					material={materials.Material}
					position={[6.58, 0.14, 2.67]}
				/>
			</group>

			<group rotation-y={-Math.PI / 2} scale={1.3}>
				<mesh
					castShadow
					geometry={nodes.tv_wall_001.geometry}
					material={materials.Material}
					position={[-4.7, 0.008, -11.5]}
				/>
			</group>

			{/* Mesita Pequeña */}

			<group position={[11, 0, 0.4]} scale={1.2} rotation-y={-Math.PI / 2}>
				<mesh
					receiveShadow
					geometry={nodes.coffee_table_001.geometry}
					material={materials.Material}
					position={[-5.238, 0, 0.745]}
				/>
			</group>

			<group rotation-y={Math.PI / 2} position={[8.7, 0, -5.8]}>
				<mesh
					castShadow
					geometry={nodes.sofa_001.geometry}
					material={materials.Material}
					position={[0, 0, 0]}
				/>
			</group>

			{/* Piano */}
			<group scale={1.5} rotation-y={-Math.PI / 2} position={[9, 0, 0]}>
				<mesh
					castShadow
					geometry={nodes.musical_instrument_001.geometry}
					material={materials.Material}
					position={[0, 0, 0]}
				/>
			</group>

			<group scale={1.5} rotation-y={-Math.PI / 2} position={[8.8, 0, 2.3]}>
				<mesh
					castShadow
					geometry={nodes.scratching_post_001.geometry}
					material={materials.Material}
					position={[0, 0, 0]}
				/>
			</group>

			<group scale={1.5} rotation-y={Math.PI / 2} position={[0, 0, 0]}>
				{/* Cafetera */}
				<mesh
					castShadow
					geometry={nodes.coffee_machine_001.geometry}
					material={materials.Material}
					position={[4.5, 0.77, 2.2]}
				/>
			</group>

			<group position={[0, 0, 0]} scale={1}>
				{/* Salsa de Tomate */}
				<mesh
					onPointerEnter={() => (document.body.style.cursor = "pointer")}
					onPointerLeave={() => (document.body.style.cursor = "auto")}
					castShadow
					geometry={nodes.ketchup_001.geometry}
					material={materials.Material}
					position={[14.7, 0.48, -5.5]}
					onClick={(e) => moverSalsaTomate(e)}
					ref={salsaRef}
					scale={1.3}
				/>
				<mesh
					onPointerEnter={() => (document.body.style.cursor = "pointer")}
					onPointerLeave={() => (document.body.style.cursor = "auto")}
					castShadow
					geometry={nodes.ketchup_001.geometry}
					material={materials.Material}
					position={[10, 0.33, -6]}
					onClick={(e) => moverSalsaTomate2(e)}
					ref={salsaRef2}
					scale={1.3}
				/>
				<mesh
					onPointerEnter={() => (document.body.style.cursor = "pointer")}
					onPointerLeave={() => (document.body.style.cursor = "auto")}
					castShadow
					geometry={nodes.ketchup_001.geometry}
					material={materials.Material}
					position={[8.6, 0.5, -6.7]}
					onClick={(e) => moverSalsaTomate3(e)}
					ref={salsaRef3}
					scale={1.3}
				/>
			</group>

			{/* Dulcecitos */}
			<group
				scale={1.5}
				position={[0, 0, 0]}
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "auto")}
			>
				<mesh
					castShadow
					geometry={nodes.dish_001.geometry}
					material={materials.Material}
					position={[7, 0.22, -3.8]}
					onClick={(e) => moverDulces(e)}
					ref={dulcesRef}
					scale={1.3}
				/>
			</group>

			<RigidBody type="fixed" colliders={false}>
				<CuboidCollider args={[1.2, 1, 1]} position={[0, 0, -1.8]} />{" "}
				{/* Mesa Blanca */}
				<CuboidCollider
					args={[0.3, 0.5, 0.3]}
					position={[-1.5, 0.7, -1.4]}
				/>{" "}
				{/* Silla */}
				<CuboidCollider
					args={[1.3, 0.5, 1]}
					position={[12.5, 0.5, -5.8]}
				/>{" "}
				{/* Mesa Azul */}
				<CuboidCollider args={[0.5, 1.5, 2]} position={[15, 0.8, -6]} />{" "}
				{/* Televisor */}
				<CuboidCollider
					args={[0.6, 1.5, 2.7]}
					position={[3.6, 0.8, -6.6]}
				/>{" "}
				{/* Cocina */}
				<CuboidCollider args={[0.3, 0.7, 1]} position={[9, 0.8, 0]} />{" "}
				{/* Piano */}
				<CuboidCollider args={[0.4, 1, 0.6]} position={[8.8, 0.8, 2.4]} />{" "}
				{/* Casa Gato */}
				<CuboidCollider args={[4, 1, 0.1]} position={[11.7, 0.8, -3.1]} />{" "}
				{/* Pared Tv */}
				<CuboidCollider args={[7, 1, 0.1]} position={[-2.2, 0.8, -3.1]} />{" "}
				{/* Pared Cuadro */}
				<CuboidCollider args={[9.3, 1, 0.1]} position={[0, 0.8, 3.1]} />{" "}
				{/* Pared Cuarto Abuela */}
				<CuboidCollider args={[0.1, 1, 3]} position={[-9.3, 0.8, 0]} />{" "}
				{/* Pared Monitor */}
				<CuboidCollider args={[0.1, 1, 3]} position={[9.3, 0.8, 0]} />{" "}
				{/* Pared Gato */}
				<CuboidCollider args={[0.1, 1, 3]} position={[3, 0.8, -6]} />{" "}
				{/* Pared Nevera */}
				<CuboidCollider args={[0.3, 1, 0.3]} position={[-4, 0.8, -2.3]} />
			</RigidBody>
		</group>
	);
};

export default Objetos;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");
