import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import App from "./app.js";

const root = createRoot(document.getElementById("root"));

root.render(
	<>
		<Canvas camera={{ position: [-1, 4, 7] }}>
			<Experience />
		</Canvas>

		{/* TODO LO QUE NO ES 3D */}
		<App />
	</>
);
