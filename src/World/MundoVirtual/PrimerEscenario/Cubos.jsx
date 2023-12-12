import { Center, Html, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import useSound from "use-sound";

const Cubos = () => {
	const CubosRef = useRef();
	const CubosRef2 = useRef();
	const CubosRef3 = useRef();
	const CubosRef4 = useRef();
	const [playPop] = useSound("/assets/sounds/pop.mp3", {
		volume: 0.3,
	});
	const PATH = "/assets/Textures/Matrix/";

	const removeComponent1 = () => {
		playPop();
		// Verifica que el objeto y su padre existan antes de intentar eliminarlo
		if (CubosRef.current && CubosRef.current.parent) {
			CubosRef.current.parent.remove(CubosRef.current);
		}
	};

	const removeComponent2 = () => {
		playPop();

		// Verifica que el objeto y su padre existan antes de intentar eliminarlo
		if (CubosRef2.current && CubosRef2.current.parent) {
			CubosRef2.current.parent.remove(CubosRef2.current);
		}
	};
	const removeComponent3 = () => {
		playPop();

		// Verifica que el objeto y su padre existan antes de intentar eliminarlo
		if (CubosRef3.current && CubosRef3.current.parent) {
			CubosRef3.current.parent.remove(CubosRef3.current);
		}
	};
	const removeComponent4 = () => {
		playPop();

		// Verifica que el objeto y su padre existan antes de intentar eliminarlo
		if (CubosRef4.current && CubosRef4.current.parent) {
			CubosRef4.current.parent.remove(CubosRef4.current);
		}
	};

	const propsTexture = useTexture({
		map: PATH + "Matrix2.png",
	});

	return (
		<>
			<mesh
				ref={CubosRef}
				rotation-y={Math.PI / 2}
				position={[-3, 2, -1.6]}
				scale={1}
				onClick={removeComponent1}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>

			<mesh
				ref={CubosRef2}
				rotation-y={Math.PI / 2}
				position={[-3, 2, 1.6]}
				scale={1}
				onClick={removeComponent2}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>

			<mesh
				ref={CubosRef3}
				rotation-y={Math.PI / 2}
				position={[-3, 5.1, 1.6]}
				scale={1}
				onClick={removeComponent3}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>

			<mesh
				ref={CubosRef4}
				rotation-y={Math.PI / 2}
				position={[-3, 5.1, -1.6]}
				scale={1}
				onClick={removeComponent4}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>
		</>
	);
};

export default Cubos;
useGLTF.preload("/assets/Models/Cubos/scene.gltf")