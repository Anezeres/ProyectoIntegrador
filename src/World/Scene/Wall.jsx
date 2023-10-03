import { useGLTF, useHelper, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper } from "three";


const Wall = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Cuarto/Cuarto2.glb");

    const bedRef = useRef();

    const PATH = "/assets/Textures/Wall/"




    const propsTexture = useTexture({
        map: PATH + 'wallColor.jpg'
    })


    return (
        <group {...props} dispose={null}>

            {/* Paredes*/}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wall.geometry}
                material={materials.White}
                
            />

            
            <mesh  position={[1,1,0]} scale={0.4}>
                <planeGeometry args={[20, 20, 20]}/>
                <meshBasicMaterial {...propsTexture}  />
            </mesh>
            
        </group>
    );
}

export default Wall;
useGLTF.preload("/assets/Models/Cuarto/Cuarto2.glb")