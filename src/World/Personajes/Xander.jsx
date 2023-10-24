import { useGLTF } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { refContext } from "../Context/refContext";
import { RigidBody } from "@react-three/rapier";

const Xander = () => {

    const { xanderRef, xanderBodyRef } = useContext(refContext)



    return (
        <RigidBody ref={xanderBodyRef} colliders={"cuboid"}>
            <mesh position={[0, 1, 0]} ref={xanderRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="purple" />
            </mesh>
        </RigidBody>
    );


}

export default Xander;