import { useTexture } from "@react-three/drei";
import { BoxGeometry } from "three";
import Floor from "../../Scene/Floor";

const WallsPadres = () => {

    const PATH = "/assets/Textures/Wall/"

    


    const propsTexture = useTexture({
        map: PATH + 'wallColor.jpg'
    })


    return (
        <>
           
            <Floor rotation-x={Math.PI/2}  rotation-z={Math.PI/2} position={[-3.8,4,8]} textures={propsTexture}/>

            {/* Cuarto Padres */}

            <mesh position={[-5,0.2,4]}>
                <boxGeometry args={[2.59, 0.3, 0.3]} />
                <meshBasicMaterial color="white" />
            </mesh>

            <mesh position={[-10,0.2,4]}>
                <boxGeometry args={[4.11, 0.3, 0.3]} />
                <meshBasicMaterial color="white" />
            </mesh>

        </>
    )

}

export default WallsPadres;


/* Mirando al eje X rotation-z={Math.PI/2} */
/* Mirando al eje Y rotation-x={Math.PI/2} */