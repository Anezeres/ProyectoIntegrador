import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../Context/refContext";
import { CuboidCollider, RigidBody } from "@react-three/rapier";


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
					receiveShadow
					geometry={nodes.door_001.geometry}
					material={materials.Material}
					position={[0, 0.1, 0]}
					ref={puertaAbuelaRef}
					// onClick={abrirPuertaAbuela}
				/>
				<mesh
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
					geometry={nodes.closet_001.geometry}
					material={materials.Material}
					position={[0, 0, 0]}
				/>
				<mesh
					castShadow
					geometry={nodes.closet_001.geometry}
					material={materials.Material}
					position={[1.28, 0, 0]}
				/>
			</group>

			<group scale={1.6} rotation-y={-Math.PI / 2} position={[11.8, 0, 12.3]}>
				{/* Cama */}
				<mesh
					castShadow
					geometry={nodes.bed_001.geometry}
					material={materials.Material}
					position={[-2.582, -0.004, -1.005]}
				/>
			</group>

			<RigidBody type="fixed" colliders={false}>
                <group scale={1.1} rotation-y={Math.PI / 2} position={[2.6, 0, 2.6]}>
                    {/* Mesa */}
                    <mesh
                        castShadow
                        geometry={nodes.office_table_001.geometry}
                        material={materials.Material}
                        position={[-2.894, -0.006, 0.728]}
                    />
                    <mesh
                        castShadow
                        geometry={nodes.office_table_001.geometry}
                        material={materials.Material}
                        position={[-1.3, -0.006, 0.728]}
                    />
                </group>
                <CuboidCollider args={[0.5, 0.5, 2.2]} position={[-15, 0.5, -5.2]} />
            </RigidBody>
		</group>
	);
}

export default ObjetosAbuela;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");