import React, { useContext, useRef, useState } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../../Context/refContext";
import { cameraContext } from "../../../Context/cameraContext";

const ObjetosMoverXander = (props) => {
	const { nodes, materials } = useGLTF(
		"/assets/Models/Decoraciones/ObjetosHogar.glb"
	);
	const { moveObjectToPositionSmoothly, abrirPuerta } =
		useContext(cameraContext);
	const { storyProgress, updateStoryProgress } = useContext(refContext);
	const objetoRef = useRef();
	const cocaColaRef = useRef();
	const cocaColaRef2 = useRef();

	const toallaRef = useRef();
	const toallaRef2 = useRef();
	const toallaRef3 = useRef();
	const [objetosMovidos, setMovidos] = useState(0);
	const puertaXanderRef = useRef();

	useHelper(objetoRef, BoxHelper);
	const setObjetosMovidos = (n) => {
		setMovidos(n);
		if (n == 5) {
			updateStoryProgress({ missionDone: true });
		}
	};
	
	const moverCocaCola = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			cocaColaRef,
			[4.3, -0.4, -1.1],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		setObjetosMovidos(objetosMovidos + 1);
	};
	const moverCocaCola2 = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			cocaColaRef2,
			[4.3, -0.4, -1.1],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		setObjetosMovidos(objetosMovidos + 1);
	};

	const moverToalla = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			toallaRef,
			[-8.3, 1.7, -8.5],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		setObjetosMovidos(objetosMovidos + 1);
	};

	const moverToalla2 = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			toallaRef2,
			[-8.3, 1.7, -8.5],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		setObjetosMovidos(objetosMovidos + 1);
	};

	const moverToalla3 = (e) => {
		e.stopPropagation()

		moveObjectToPositionSmoothly(
			toallaRef3,
			[-8.3, 1.7, -8.5],
			1000,
			() => {
				// Esta función se ejecutará cuando la animación termine
			},
			true
		);
		setObjetosMovidos(objetosMovidos + 1);
	};

	/* [1.329, -0.131, 1.992]*/

	return (
		<group {...props} dispose={null}>
			<group
				position={[-11.7, 1.4, -7.7]}
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "auto")}
			>
				{/* Coca Cola */}
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.drink_001.geometry}
					material={materials.Material}
					position={[1.329, -0.131, 1.992]}
					ref={cocaColaRef}
					onClick={(e) => {moverCocaCola(e)}}
				/>
			</group>

			<group
				position={[-11.7, 1.4, -8.7]}
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "auto")}
			>
				{/* Coca Cola */}
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.drink_001.geometry}
					material={materials.Material}
					position={[1.329, -0.131, 1.992]}
					ref={cocaColaRef2}
					onClick={(e) => {moverCocaCola2(e)}}
				/>
			</group>

			{/* Toallas */}
			<group
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "auto")}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.clothes_002.geometry}
					material={materials.Material}
					position={[-12.4, 0.14, -5.8]}
					ref={toallaRef}
					onClick={(e) => {moverToalla(e)}}
				/>
			</group>

			<group
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "auto")}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.clothes_002.geometry}
					material={materials.Material}
					position={[-10.7, 0.14, -5]}
					ref={toallaRef2}
					onClick={(e) => {moverToalla2(e)}}
				/>
			</group>

			<group
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "auto")}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.clothes_002.geometry}
					material={materials.Material}
					position={[-7.7, 0.14, -3.7]} /* [-7.7, 0.14, -3.7] */
					ref={toallaRef3}
					onClick={(e) => {moverToalla3(e)}}
				/>
			</group>
		</group>
	);
};


export default ObjetosMoverXander;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");
