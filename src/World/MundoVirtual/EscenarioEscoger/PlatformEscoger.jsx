import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Floor from "../../Scene/Floor";

const PlatformEscoger = () => {

    const PATH = "/assets/Textures/Matrix/"




    const propsTexture = useTexture({
        map: PATH + 'SueloMatrix3.png'
    })

    const floorPositions = [
        [0, 0, 0],
        [8, 0, 0],
        
        
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

export default PlatformEscoger;