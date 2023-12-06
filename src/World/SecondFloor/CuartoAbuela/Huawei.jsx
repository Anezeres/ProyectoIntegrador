import { Center, Html, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import "./Mensaje.css"

const Huawei = () => {

    const HuaweiModel = useGLTF("/assets/Models/Huawei/scene.gltf");
    const HuaweiRef = useRef();



    return (
        <>
            <Center>
                <Html
                    position={[4.3, 1.8, 5]}
                    center
                    distanceFactor={12}
                    visible={false}



                >
                    <h2 className="song-text">*Suena*</h2>
                </Html>

            </Center>
            <RigidBody type="fixed" colliders={false}>
                <mesh ref={HuaweiRef} position={[4.3, 1.05, 5]} scale={0.02} rotation-y={Math.PI} rotation-z={Math.PI}>
                    <primitive object={HuaweiModel.scene} />
                </mesh>
                <CuboidCollider args={[1, 2, 1]} position={[-4.8, 2.0, -11.3]} />
            </RigidBody>
        </>
    );


}

export default Huawei;
useGLTF.preload("/assets/Models/Huawei/scene.gltf")