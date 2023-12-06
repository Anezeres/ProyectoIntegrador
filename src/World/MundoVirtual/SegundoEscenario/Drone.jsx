import { Center, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Drone = () => {

    const DroneModel = useGLTF("/assets/Models/Drone/scene.gltf");
    const DroneRef = useRef();

    useFrame((state, delta) => {
        const amplitude = 0.5; 
        const frequency = 2; 


        const newY = 3 +amplitude * Math.sin(state.clock.elapsedTime * frequency);

        DroneRef.current.position.y = newY;
    })



    return (
        <>
            <Center>
                <Html
                    position={[0, 5, -6]}
                    center
                    distanceFactor={12}
                    visible={false}



                >
                    <h2 className="song-text">*Bip*</h2>
                </Html>

            </Center>
            <mesh ref={DroneRef} position={[0, 3, -6]} scale={0.8} >
                <primitive object={DroneModel.scene} />
            </mesh>
        </>
    );


}

export default Drone;
useGLTF.preload("/assets/Models/Drone/scene.gltf")