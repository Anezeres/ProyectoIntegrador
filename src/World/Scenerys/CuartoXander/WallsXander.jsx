import { useTexture } from "@react-three/drei";
import Floor from "../../ComponentesGlobales/Floor";

const WallsXander = () => {

    const PATH = "/assets/Textures/Wall/"

    


    const propsTexture = useTexture({
        map: PATH + 'wallColor.jpg'
    })


    return (
        <>

            <Floor rotation-x={Math.PI/2} position={[-8,4,-12]} textures={propsTexture}/>
            <Floor rotation-x={Math.PI/2}  rotation-z={Math.PI/2} position={[-3.8,4,-7.8]} textures={propsTexture}/>
            <Floor rotation-y={Math.PI} rotation-x={Math.PI/2} position={[-16,4,-12]} textures={propsTexture}/>


            {/* Cuarto Xander */}

            <mesh position={[-5,0.2,-4]}>
                <boxGeometry args={[2.59, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={[-10,0.2,-4]}>
                <boxGeometry args={[4.11, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

        </>
    )

}

export default WallsXander;


/* Mirando al eje X rotation-z={Math.PI/2} */
/* Mirando al eje Y rotation-x={Math.PI/2} */