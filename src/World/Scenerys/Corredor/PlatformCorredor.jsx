import { useTexture } from "@react-three/drei";
import Floor from "../../ComponentesGlobales/Floor";
import { RigidBody } from "@react-three/rapier";

const PlatformCorredor = () => {

    const PATH = "/assets/Textures/Wood/"




    const propsTexture = useTexture({
        map: PATH + 'woodColor.jpg'
    })

    const floorPositions = [
        [0, 0, 0],
        [8, 0, 0],
        [-8, 0, 0],
        [8, 0, -8],
        [16, 0, -8],
    ];

    const floors = floorPositions.map((position, index) => (
        <RigidBody type="fixed" key={index}>
            <Floor
                rotation-y={-Math.PI}
                position={position}
                textures={propsTexture}
            />
        </RigidBody>
    ));



    return (
        <>
            {floors}

        </>
    )

}

export default PlatformCorredor;