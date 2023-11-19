import { useTexture } from "@react-three/drei";

const Fondo = () => {

    const PATH = "/assets/Textures/fondos/"


    const propsTexture = useTexture({
        map: PATH + 'Fondo1.png',
    })
    

    return (
        <>

            <mesh>
                <planeGeometry args={[20, 20, 20]}/>
                <meshBasicMaterial {...propsTexture}  />
            </mesh>
        </>
    )

}

export default Fondo;