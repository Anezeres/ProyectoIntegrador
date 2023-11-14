import { useContext, useEffect, useRef } from "react";
import { characterContext } from "../Context/characterContext";
import { CylinderCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
//import { useFrame } from "@react-three/fiber";
//import { atom, useAtom } from "jotai";
import * as THREE from 'three'; // Importa la biblioteca three.js


//export const xanderBodyRef = atom(null);



const Xander = ({ position, ...props }) => {
    //const [bodyRef, setBodyRef] = useAtom(xanderBodyRef);

    const { xanderRef, xanderModel, playAnimationWithDuration, playAnimation, stopAnimation, xanderBodyRef, moveTo, newPosition, setNewPosition, setLastPosition, changePosition} = useContext(characterContext)
    const { nodes, materials, animations } = xanderModel;



    useFrame(() => {
        if (xanderBodyRef.current) {
            //console.log(Math.floor(xanderBodyRef.current.translation().x))
            //console.log(newPosition[0])
            if (Math.floor(xanderBodyRef.current.translation().x) != Math.floor(newPosition[0]) || Math.floor(xanderBodyRef.current.translation().z) != Math.floor(newPosition[2])) {
                moveTo(newPosition, 'Xander')
                playAnimation('Walking', 'Xander')
            } else {
                playAnimation('Idle', 'Xander')
            }

            xanderBodyRef.current.setRotation({
                x: 0,
                y: 0,
                z: 0,
                w: 1
            }, true)
        }
    });

    useEffect(() => {
        setNewPosition(position)
        setLastPosition(position)
    }, []);

    return (
        <RigidBody
            ref={xanderBodyRef}
            density={100}
            friction={1}
            restitution={0}
            position={position}
            colliders={false}
            name="Xander"
        >
            <group
                ref={xanderRef}
                scale={1.5}
                dispose={null}
                onClick={() => {
                    changePosition([-9, 0, -5],"Xander")
                }}
            >
                <group name="Scene">
                    <group name="Armature">
                        <skinnedMesh
                            name="EyeLeft"
                            geometry={nodes.EyeLeft.geometry}
                            material={materials.Wolf3D_Eye}
                            skeleton={nodes.EyeLeft.skeleton}
                            morphTargetDictionary={
                                nodes.EyeLeft.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.EyeLeft.morphTargetInfluences
                            }
                            castShadow
                        />
                        <skinnedMesh
                            name="EyeRight"
                            geometry={nodes.EyeRight.geometry}
                            material={materials.Wolf3D_Eye}
                            skeleton={nodes.EyeRight.skeleton}
                            morphTargetDictionary={
                                nodes.EyeRight.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.EyeRight.morphTargetInfluences
                            }
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Body"
                            geometry={nodes.Wolf3D_Body.geometry}
                            material={materials.Wolf3D_Body}
                            skeleton={nodes.Wolf3D_Body.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Hair"
                            geometry={nodes.Wolf3D_Hair.geometry}
                            material={materials.Wolf3D_Hair}
                            skeleton={nodes.Wolf3D_Hair.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Head"
                            geometry={nodes.Wolf3D_Head.geometry}
                            material={materials.Wolf3D_Skin}
                            skeleton={nodes.Wolf3D_Head.skeleton}
                            morphTargetDictionary={
                                nodes.Wolf3D_Head.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.Wolf3D_Head.morphTargetInfluences
                            }
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Outfit_Bottom"
                            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                            material={materials.Wolf3D_Outfit_Bottom}
                            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Outfit_Footwear"
                            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                            material={materials.Wolf3D_Outfit_Footwear}
                            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Outfit_Top"
                            geometry={nodes.Wolf3D_Outfit_Top.geometry}
                            material={materials.Wolf3D_Outfit_Top}
                            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Teeth"
                            geometry={nodes.Wolf3D_Teeth.geometry}
                            material={materials.Wolf3D_Teeth}
                            skeleton={nodes.Wolf3D_Teeth.skeleton}
                            morphTargetDictionary={
                                nodes.Wolf3D_Teeth.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.Wolf3D_Teeth.morphTargetInfluences
                            }
                            castShadow
                        />
                        <primitive object={nodes.Hips} />
                        <CylinderCollider args={[0.9, 0.4]} position={[0, 0.6, 0]} />
                    </group>
                </group>
            </group>
        </RigidBody >
    );
};


export default Xander;