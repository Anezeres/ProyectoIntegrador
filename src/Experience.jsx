

import Controls from "./World/Controls/Controls";
import { Physics } from "@react-three/rapier";
import { useEffect, useState } from "react";
import CharacterContext from "./Context/CharacterContext.jsx";
import CameraContext from "./Context/CameraContext.jsx";
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