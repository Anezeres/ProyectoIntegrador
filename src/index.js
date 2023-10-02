import {createRoot} from "react-dom/client"
import Experience from "./Experience"
import "./styles.css"
import { Canvas } from "@react-three/fiber"


const root = createRoot(document.getElementById("root"))

root.render(
    <>
        <Canvas camera={{ position: [-1, 4, 7] }}>
            <Experience/>
        </Canvas>
    </>
)