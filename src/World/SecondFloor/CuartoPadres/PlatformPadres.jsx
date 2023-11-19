import { useTexture } from "@react-three/drei";
import Floor from "../../Scene/Floor";

const PlatformPadres = () => {

    const PATH = "/assets/Textures/Wood/"




    const propsTexture = useTexture({
        map: PATH + 'woodColor.jpg'
    })

    const floorPositions = [
        [-8, 0, 8]
        ];

        const floors = floorPositions.map((position, index) => (
            <Floor key={index} rotation-y={-Math.PI} position={position} textures={propsTexture}/>
            ));
        
        

    return (
        <>
            {floors}


            
        </>
    )

}

export default PlatformPadres;