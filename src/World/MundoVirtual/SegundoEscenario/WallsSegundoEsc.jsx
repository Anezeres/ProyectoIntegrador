import { useTexture } from "@react-three/drei";
import { BoxGeometry } from "three";
import Floor from "../../ComponentesGlobales/Floor";
import { RigidBody } from "@react-three/rapier";

const WallsSegundoEsc = () => {

    const PATH = "/assets/Textures/Matrix/"

    


    const propsTexture = useTexture({
        map: PATH + 'Matrix2.png'
    })


    return (
			<>
				<RigidBody type="fixed">
					<Floor
						rotation-x={Math.PI / 2}
						rotation-z={Math.PI / 2}
						position={[12, 4, 0]}
						textures={propsTexture}
					/>
					<Floor
						rotation-x={Math.PI / 2}
						rotation-z={Math.PI / 2}
						position={[4, 4, -8]}
						textures={propsTexture}
					/>

					<Floor
						rotation-x={Math.PI / 2}
						position={[8, 4, -4]}
						textures={propsTexture}
					/>
					<Floor
						rotation-x={Math.PI / 2}
						position={[0, 4, -12]}
						textures={propsTexture}
					/>
					<Floor
						rotation-x={Math.PI / 2}
						position={[-8, 4, -4]}
						textures={propsTexture}
					/>
				</RigidBody>
				{/* <Floor rotation-y={Math.PI} rotation-x={Math.PI/2} position={[-16,4,-12]} textures={propsTexture}/> */}
			</>
		);

}

export default WallsSegundoEsc;


/* Mirando al eje X rotation-z={Math.PI/2} */
/* Mirando al eje Y rotation-x={Math.PI/2} */