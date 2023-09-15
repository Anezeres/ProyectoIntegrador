import { OrbitControls } from "@react-three/drei"
import Fondo from "./Fondo";


const Experience = () => {

    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Fondo />
        </>
    )

}

export default Experience;