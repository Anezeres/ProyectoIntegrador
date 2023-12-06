import ObjetosAbuela from "./ObjetosAbuela";
import PlatformAbuela from "./PlatformAbuela";
import WallsAbuela from "./WallsAbuela";
import { refContext } from "../../Context/refContext";
import { useContext } from "react";
import { OrbitControls } from "@react-three/drei";
import { cameraContext } from "../../Context/cameraContext";
import Huawei from "./Huawei";




const CuartoAbuela = () => {
	/* const { camera } = useContext(cameraContext);

	const moveCamera = () => {
		console.log(camera);
		camera.position.x = 12;
		camera.position.z = 16;
		camera?.position.y = 7;
	};

	moveCamera(); */

	return (
		<>
			<OrbitControls makeDefault target={[12, 4, 8]} />
			<ObjetosAbuela position={[0, 0, 0]} scale={1.3} />
			<PlatformAbuela />
			<WallsAbuela />
			<Huawei/>
		</>
	);
};

export default CuartoAbuela;