import { useGLTF, useHelper, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper } from "three";


const Wall = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Cuarto/Cuarto2.glb");

    const bedRef = useRef();

    const PATH = "/assets/Textures/Wall/"





    return (
        <group {...props} dispose={null}>

            {/* Paredes*/}
            <mesh
                geometry={nodes.Wall.geometry}
                material={materials.White}
                
            />

            
            <mesh  position={[1,1,0]} scale={0.4} receiveShadow>
                <planeGeometry args={[20, 20, 20]}/>
                <meshBasicMaterial {...propsTexture}  />
            </mesh>
            
        </group>
    );
}

export default Wall;
useGLTF.preload("/assets/Models/Cuarto/Cuarto2.glb")