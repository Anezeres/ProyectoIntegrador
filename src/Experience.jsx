

import Controls from "./World/Controls/Controls";
import { Physics } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import CharacterContext from "./World/Context/CharacterContext.jsx";
import CameraContext from "./World/Context/CameraContext.jsx";
import TimeLine from "./Story/TimeLine.jsx";

const Experience = ({ children, ...props }) => {
	const [loaded, setLoaded] = useState(false);
	const [loadedCharaters, setLoadedCharacters] = useState(false);
	
	
	useEffect(() => {
		// Simula una carga asíncrona (puede ser una petición de red, etc.)
		setTimeout(() => {
			setLoaded(true);
			setTimeout(() => {
				setLoadedCharacters(true);
			}, 10);
		}, 10); // Simulamos una carga de 2 segundos
	}, []);

	return (
		<>
			<CharacterContext>
				<CameraContext>
					<Physics>
						<ambientLight intensity={0.3} />
						
						{/* <directionalLight position={[10, 10, 5]} intensity={2} /> */}
						{/* <axesHelper args={[5]} position={[0, 0, 0]} /> */}
						{loaded && children}
						{loaded && <Controls />}
						{loadedCharaters && <TimeLine ruta={props.ruta} />}
					</Physics>
				</CameraContext>
			</CharacterContext>
		</>
	);
};

export default Experience;