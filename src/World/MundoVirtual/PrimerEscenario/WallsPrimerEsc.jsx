import { useTexture } from "@react-three/drei";
import { BoxGeometry } from "three";
import Floor from "../../ComponentesGlobales/Floor";
import FloorNoRigid from "../../ComponentesGlobales/FloorNoRigid";

import { RigidBody } from "@react-three/rapier";

const WallsPrimerEsc = () => {

    const PATH = "/assets/Textures/Matrix/"




    const propsTexture = useTexture({
        map: PATH + 'Matrix2.png'
    })


    return (
        <>


            <Floor rotation-x={Math.PI / 2} rotation-z={Math.PI / 2} position={[12, 4, 0]} textures={propsTexture} />
            <Floor rotation-x={Math.PI / 2} position={[8, 4, -4]} textures={propsTexture} />


            <FloorNoRigid rotation-x={Math.PI / 2} rotation-z={Math.PI / 2} position={[0, 4, 0]} textures={propsTexture} />
            <FloorNoRigid rotation-x={Math.PI / 2} rotation-z={-Math.PI / 2} position={[0, 4, 0]} textures={propsTexture} />


            <Floor rotation-x={Math.PI / 2} position={[0, 4, -4]} textures={propsTexture} />
            <Floor rotation-x={Math.PI / 2} position={[-8, 4, -4]} textures={propsTexture} />





            {/* <Floor rotation-y={Math.PI} rotation-x={Math.PI/2} position={[-16,4,-12]} textures={propsTexture}/> */}

        </>
    )

}

export default WallsPrimerEsc;


/* Mirando al eje X rotation-z={Math.PI/2} */
/* Mirando al eje Y rotation-x={Math.PI/2} */