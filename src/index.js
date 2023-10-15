import {createRoot} from "react-dom/client"
import Experience from "./Experience"
import "./styles.css"
import { Canvas } from "@react-three/fiber"
import Dialogs from "./Components/Dialogs";

const root = createRoot(document.getElementById("root"));

root.render(
	<>
		{/* <div id="canvas-container"> */}
		<Canvas camera={{ position: [-1, 4, 7] }}>
			<Experience />
		</Canvas>
		{/* </div> */}
		<div className="app-container">
			<Dialogs
				conversation={[
					// { name: "xander", lines: "Hola Aria" },
					{
						name: "Xander",
						lines:
							"Mi abuela no puede enterarse de esto. Debo encontrar la forma de ayudarla sin que se preocupe",
					},
				]}
			/>
		</div>
	</>
);