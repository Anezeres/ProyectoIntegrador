import { useGLTF } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { refContext } from "../Context/refContext";
import { RigidBody } from "@react-three/rapier";

const Abuela = () => {

    const { abuelaRef } = useContext(refContext)



    return (
        <RigidBody colliders={"cuboid"}>
            <mesh position={[2, 1, 0]} ref={abuelaRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    );


}

export default Abuela;