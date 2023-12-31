import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ardilla(props) {
	const { nodes, materials } = useGLTF("/tapaq/ardilla1.glb");
	function clicArdilla() {
		window.location.href = "/tapaq";
	}

	return (
		<group {...props} dispose={null}>
			<group scale={0.01}>
				<group position={[53.142, 248.588, 80.844]} onClick={clicArdilla}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Retopology_Material001_0.geometry}
						material={materials["Material.001"]}
						position={[0, -1.622, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/tapaq/ardilla1.glb");
