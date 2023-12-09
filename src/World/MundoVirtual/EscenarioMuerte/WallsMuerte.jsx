import { useTexture } from "@react-three/drei";
import { BoxGeometry } from "three";
import Floor from "../../Scene/Floor";
import { RigidBody } from "@react-three/rapier";

const WallsMuerte = () => {

    const PATH = "/assets/Textures/Wall/"
    const PATH2 = "/assets/Textures/Wood/"

    


    const propsTexture = useTexture({
        map: PATH + 'wallColor.jpg'
    })




    return (
        <>

            <RigidBody type="fixed" debug>
                <Floor rotation-x={Math.PI/2}  rotation-z={Math.PI/2} position={[4,4,0]} textures={propsTexture}/>


                <Floor rotation-x={Math.PI/2} position={[0,4,-4]} textures={propsTexture}/>
               {/*  <Floor rotation-x={Math.PI/2} position={[-8,4,-4]} textures={propsTexture}/> */}


                
    
            </RigidBody>
                {/* <Floor rotation-y={Math.PI} rotation-x={Math.PI/2} position={[-16,4,-12]} textures={propsTexture}/> */}

        </>
    )

}

export default WallsMuerte;


/* Mirando al eje X rotation-z={Math.PI/2} */
/* Mirando al eje Y rotation-x={Math.PI/2} */