import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Floor from "../../ComponentesGlobales/Floor";

const PlatformMuerte = () => {

    const PATH = "/assets/Textures/Wood/"




    const propsTexture = useTexture({
        map: PATH + 'woodColor.jpg'
    })

    const floorPositions = [
        [0, 0, 0]
        
        
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

export default PlatformMuerte;