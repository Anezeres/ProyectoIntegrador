import { useTexture } from "@react-three/drei";
import Floor from "../../ComponentesGlobales/Floor";


const PlatformXander = () => {

    const PATH = "/assets/Textures/Wood/"

    const propsTexture = useTexture({
        map: PATH + 'woodColor.jpg'
    })

    const floorPositions = [
        [-8, 0, -8],
        [-16, 0, -8],

    ];

    const floors = floorPositions.map((position, index) => (
        <Floor key={index} rotation-y={-Math.PI} position={position} textures={propsTexture} />
    ));



    return (
        <>
            {floors}
            <Floor rotation-y={-Math.PI} position={[-7, 0.14, -3]} scale={0.3} textures={propsTexture}/>
        </>
    )

}

export default PlatformXander;