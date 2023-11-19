import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Arcade = () => {

    const ArcadeModel = useGLTF("/assets/Models/Arcade/scene.gltf");
    const ArcadeRef = useRef();
    


    return(
        <RigidBody type="fixed" colliders={false}>
            <mesh ref={ArcadeRef} position={[-5,1.8,-11.1]} scale={1.6} rotation-y={Math.PI}>
                <primitive object={ArcadeModel.scene}/>
            </mesh>
            <CuboidCollider args={[1,2,1]} position={[-4.8,2,-11.3]}/>
        </RigidBody>
    );

    
}

export default Arcade;
useGLTF.preload("/assets/Models/Arcade/scene.gltf")