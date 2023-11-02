import { useContext, useEffect, useState, useRef } from "react";
import { refContext } from "../Context/refContext";
import { MathUtils, Quaternion, Vector3 } from "three";
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Controls = () => {
    const { xanderRef, playAnimationWithDuration, playAnimation, stopAnimation, animationInProcess } = useContext(refContext)
    const [KeysPressing, setKeyPressing] = useState(new Set());
    const velocity = 1
    const velocityBackwards = 1
    const xanderBodyRef = useRef();

    // temporary data
    let walkDirection = new Vector3();
    let rotateAngle = new Vector3(0, 1, 0);
    let rotateQuarternion = new Quaternion();

    useFrame((state, delta) => {
        if (xanderRef && xanderBodyRef) {
            if (KeysPressing.size > 0) {
                xanderBodyRef.current.setBodyType(0, true)
                // Calculamos el movimiento en función de la rotación actual
                //console.log(eulerRot.y)
                //const movimientoX = eulerRot.y * 0.02;
                //const movimientoZ = eulerRot.y * 0.02;


                // Guarda la rotación actual antes de hacer cambios
                //rotation.z = 0;
                //rotation.x = 0;

                // Realiza acciones mientras al menos una tecla está presionada
                if (KeysPressing.has('w') && KeysPressing.has('s')) {
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('w')) {
                    // Restaura la rotación Y a su valor original
                    xanderRef.current.position.x += Math.sin(xanderRef.current.rotation.y) * 0.015;
                    xanderRef.current.position.z += Math.cos(xanderRef.current.rotation.y) * 0.015;
                    //rigidXanderRef.current.addForce({x:1,y:0,z:1})
                    // While Rapier's return types need conversion, setting values can be done directly with Three.js types
                    // Modificar los valores de position



                    playAnimation('Walking', 'Xander')
                } else if (KeysPressing.has('s')) {
                    xanderRef.current.position.x -= Math.sin(xanderRef.current.rotation.y) * 0.01;
                    xanderRef.current.position.z -= Math.cos(xanderRef.current.rotation.y) * 0.01;
                    playAnimation("Walking Backwards", 'Xander')
                }

                if (KeysPressing.has('a') && KeysPressing.size == 1) {
                    xanderRef.current.rotation.y += 0.02;
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('a') && KeysPressing.size > 1) {
                    xanderRef.current.rotation.y += 0.02;
                }

                if (KeysPressing.has('d') && KeysPressing.size == 1) {
                    xanderRef.current.rotation.y -= 0.02;
                    playAnimation('Idle', 'Xander')
                } else if (KeysPressing.has('d') && KeysPressing.size > 1) {
                    xanderRef.current.rotation.y -= 0.02;
                }

                xanderBodyRef.current.setTranslation({
                    x: xanderRef.current.position.x,
                    y: xanderRef.current.position.y,
                    z: xanderRef.current.position.z
                }, true)
            } else {
                xanderBodyRef.current.setBodyType(1, true)
                xanderBodyRef.current.setTranslation({
                    x: xanderRef.current.position.x,
                    y: xanderRef.current.position.y+1.5,
                    z: xanderRef.current.position.z
                }, true)


                if (animationInProcess) {
                    console.log("haciendo Animacion")
                } else {
                    playAnimation('Idle', 'Xander')
                }
            }
            // walkDirection.applyAxisAngle(rotateAngle, xanderBodyRef.current.translation());

            
            xanderBodyRef.current.setRotation({
                x: 0,
                y: xanderRef.current.quaternion.y,
                z: 0,
                w: xanderRef.current.quaternion.w
            }, true)



            //rigidXanderRef.current.setTranslation(position, true);
            //rigidXanderRef.current.setRotation(rotation, true);
            //rigidXanderRef.current.setAngvel({ x: 0, y: giro, z: 0 }, true);
        }

    })

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key == 'w' || event.key == 'a' || event.key == 's' || event.key == 'd') {
                setKeyPressing(prevKeys => new Set([...prevKeys, event.key]));
            }
        };

        const handleKeyUp = (event) => {
            setKeyPressing(prevKeys => {
                const newKeys = new Set(prevKeys);
                newKeys.delete(event.key);
                return newKeys;
            });

        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        //position = vec3(rigidXanderRef.current.translation());
        //rotation = quat(rigidXanderRef.current.rotation());
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <RigidBody
            ref={xanderBodyRef}
            density={50}
            friction={0}
            restitution={0}
            

        >
            <CuboidCollider args={[0.5, 1.5, 0.5]} position={[0, 0, 0]} />
        </RigidBody>
    );


}

export default Controls;