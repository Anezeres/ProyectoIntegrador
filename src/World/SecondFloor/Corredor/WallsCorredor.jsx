import { useTexture } from "@react-three/drei";
import { BoxGeometry } from "three";
import Floor from "../../Scene/Floor";
import { RigidBody } from "@react-three/rapier";

const WallsCorredor = () => {

    const PATH = "/assets/Textures/Wall/"




    const propsTexture = useTexture({
        map: PATH + 'wallColor.jpg'
    })


    return (
        <>

            <RigidBody type="fixed">
                <Floor rotation-x={Math.PI / 2} rotation-z={Math.PI / 2} position={[20, 4, -7.8]} textures={propsTexture} />
                <Floor rotation-x={Math.PI / 2} position={[8, 4, -12]} textures={propsTexture} />
                <Floor rotation-y={Math.PI} rotation-x={Math.PI / 2} position={[16, 4, -12]} textures={propsTexture} />

            </RigidBody>
            {/* <Floor rotation-y={Math.PI} rotation-x={Math.PI/2} position={[-16,4,-12]} textures={propsTexture}/> */}

            {/* Cuarto Padres */}
            <mesh position={[5.8, 0.2, 4]}>
                <boxGeometry args={[3.48, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={[10.7, 0.2, 4]}>
                <boxGeometry args={[2.59, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Cuarto Abuela */}

            <mesh position={[-5, 0.2, 4]}>
                <boxGeometry args={[2.59, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={[-10, 0.2, 4]}>
                <boxGeometry args={[4.11, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>


            {/* Cuarto Xander */}

            <mesh position={[-5, 0.2, -4]}>
                <boxGeometry args={[2.59, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={[-10, 0.2, -4]}>
                <boxGeometry args={[4.11, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Cuarto Sala */}

            <mesh position={[5, 0.2, -4]}>
                <boxGeometry args={[2.59, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={[11, 0.2, -4]}>
                <boxGeometry args={[2, 0.3, 0.3]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    )

}

export default WallsCorredor;


/* Mirando al eje X rotation-z={Math.PI/2} */
/* Mirando al eje Y rotation-x={Math.PI/2} */