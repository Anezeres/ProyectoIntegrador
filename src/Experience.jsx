import { OrbitControls } from "@react-three/drei"


const Experience = () => {

    return (
        <>
            <OrbitControls makeDefault />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    )

}

export default Experience;