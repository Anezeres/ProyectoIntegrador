import { useTexture } from "@react-three/drei";
import Floor from "../../Scene/Floor";


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
            <Floor key={index} rotation-y={-Math.PI} position={position} textures={propsTexture}/>
            ));
        
        const textureMeshes = floorPositions.map((position, index) => (
            <mesh
                key={index}
                rotation-x={-Math.PI / 2}
                position={[position[0], 0.21, position[2]]}
                scale={0.4}
            >
                <planeGeometry args={[20, 20, 20]} />
                <meshBasicMaterial {...propsTexture} />
            </mesh>
        ));

    return (
        <>
            {floors}
            {textureMeshes}


            
        </>
    )

}

export default PlatformXander;