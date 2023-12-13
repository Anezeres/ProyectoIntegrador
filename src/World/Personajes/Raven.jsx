import { useContext, useEffect } from "react";
import { characterContext } from "../../Context/characterContext";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";


//export const ravenBodyRef = atom(null);



const Raven = ({ position, ...props }) => {

    const { 
        ravenRef, 
        ravenModel, 
        ravenBodyRef, 
        moveTo, 
        newPositionRaven, 
        setNewPositionRaven, 
        setLastPositionRaven, 
        changePosition, 
        moveRaven, 
        arrayPositionRaven, 
        playAnimation 
    } = useContext(characterContext)
    
    const { nodes, materials } = ravenModel;


    useEffect(() => {
        playAnimation('Idle','Raven')
    }, []);

    useFrame(() => {
        if (ravenBodyRef.current) {
            if (moveRaven) {
                if (ravenBodyRef.current.translation().x.toFixed(1) != newPositionRaven[0].toFixed(1) || ravenBodyRef.current.translation().z.toFixed(1) != newPositionRaven[2].toFixed(1)) {
                    moveTo(newPositionRaven, 'Raven')
                } else {
                    changePosition(arrayPositionRaven, 'Raven')
                }
            }
            //hace que el personaje siempre este bien orientado
            ravenBodyRef.current.setRotation({
                x: 0,
                y: 0,
                z: 0,
                w: 1
            }, true)
        }
    });

    useEffect(() => {
        setNewPositionRaven(position)
        setLastPositionRaven(position)
    }, []);

    return (
        <RigidBody
            ref={ravenBodyRef}
            density={100}
            friction={1}
            restitution={0}
            position={position}
            colliders={false}
            {...props}
            name="raven"
        >
            <group
                ref={ravenRef}
                scale={1.5}
                dispose={null}
            >
                <group name="Scene">
                    <group name="Armature">
                        <skinnedMesh
                            name="EyeLeft"
                            geometry={nodes.EyeLeft.geometry}
                            material={materials.Wolf3D_Eye}
                            skeleton={nodes.EyeLeft.skeleton}
                            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                            castShadow
                        />
                        <skinnedMesh
                            name="EyeRight"
                            geometry={nodes.EyeRight.geometry}
                            material={materials.Wolf3D_Eye}
                            skeleton={nodes.EyeRight.skeleton}
                            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
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
                            name="Wolf3D_Glasses"
                            geometry={nodes.Wolf3D_Glasses.geometry}
                            material={materials.Wolf3D_Glasses}
                            skeleton={nodes.Wolf3D_Glasses.skeleton}
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
                            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
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
                            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
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


export default Raven;