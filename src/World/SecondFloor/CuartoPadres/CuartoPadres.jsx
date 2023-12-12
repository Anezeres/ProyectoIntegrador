import ObjetosPadres from "./ObjetosPadres";
import PlatformPadres from "./PlatformPadres";
import { OrbitControls } from "@react-three/drei";
import Iluminacion from "./Iluminacion";




const CuartoPadres = () => {


    return (
			<>
				<OrbitControls makeDefault target={[-8, 0, 8]} />
				<ObjetosPadres position={[0, 0, 0]} scale={1.3} />
				<PlatformPadres />
                <Iluminacion/>
			</>
		);

}

export default CuartoPadres;