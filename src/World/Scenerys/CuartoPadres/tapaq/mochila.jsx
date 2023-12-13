import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

export function Mochila(props) {
	const { nodes, materials } = useGLTF("/tapaq/mochila.glb");
	return (
		<group {...props} dispose={null}>
			<Html position={[700, 2500, 8]} center distanceFactor={12}>
				<img
					src="/images/univalle.jpg"
					alt="univalle for ever"
					width={400}
					height={200}
				/>
				<h1 className="text-8xl">Sistemas</h1>
			</Html>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["Box001_Material_#2_0"].geometry}
				material={materials.Material_2}
				position={[-30.83, 35.042, -8.21]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
			/>
		</group>
	);
}

useGLTF.preload("/tapaq/mochila.glb");
