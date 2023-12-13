import { Center, Html, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import useSound from "use-sound";
import { refContext } from "../../../Context/refContext";

const Cubos = () => {
	const CubosRef = useRef();
	const CubosRef2 = useRef();
	const CubosRef3 = useRef();
	const CubosRef4 = useRef();
	const [playPop] = useSound("/assets/sounds/pop.mp3", {
		volume: 0.3,
	});
	const PATH = "/assets/Textures/Matrix/";
	const { updateStoryProgress } = useContext(refContext)
	const [objetosMovidos, setMovidos] = useState(0);

	const removeComponent = (ref, e) => {
		e.stopPropagation()
		playPop();
		if (ref.current && ref.current.parent) {
			ref.current.parent.remove(ref.current);
		}
		setMovidos((prevMovidos) => prevMovidos + 1);
	};

	useEffect(() => {
		if (objetosMovidos == 4) {
			updateStoryProgress({ missionDone: true });
		}
	}, [objetosMovidos])


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
				onClick={(e) => removeComponent(CubosRef, e)}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>

			<mesh
				ref={CubosRef2}
				rotation-y={Math.PI / 2}
				position={[-3, 2, 1.6]}
				scale={1}
				onClick={(e) => removeComponent(CubosRef2, e)}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>

			<mesh
				ref={CubosRef3}
				rotation-y={Math.PI / 2}
				position={[-3, 5.1, 1.6]}
				scale={1}
				onClick={(e) => removeComponent(CubosRef3, e)}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>

			<mesh
				ref={CubosRef4}
				rotation-y={Math.PI / 2}
				position={[-3, 5.1, -1.6]}
				scale={1}
				onClick={(e) => removeComponent(CubosRef4, e)}
			>
				<boxGeometry args={[3, 3, 3]} />
				<meshBasicMaterial {...propsTexture} />
			</mesh>
		</>
	);
};

export default Cubos;
useGLTF.preload("/assets/Models/Cubos/scene.gltf")