import ObjetosAbuela from "./ObjetosAbuela";
import PlatformAbuela from "./PlatformAbuela";
import WallsAbuela from "./WallsAbuela";
import { OrbitControls } from "@react-three/drei";
import Huawei from "./Huawei";
import Iluminacion from "./Iluminacion";




const CuartoAbuela = () => {
	return (
		<>
			<OrbitControls makeDefault target={[12, 4, 8]} />
			<ObjetosAbuela position={[0, 0, 0]} scale={1.3} />
			<PlatformAbuela />
			<WallsAbuela />
			<Huawei/>
			<Iluminacion/>
		</>
	);
};

export default CuartoAbuela;