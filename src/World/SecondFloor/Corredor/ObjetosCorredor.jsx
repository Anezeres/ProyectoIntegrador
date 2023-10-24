import React, { useContext, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { refContext } from "../../Context/refContext";


const Objetos = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");
    const { moveObjectToPositionSmoothly, abrirPuerta } = useContext(refContext)

    const objetoRef = useRef();
    const cameraRef = useRef();

    const puertaXanderRef = useRef();
    const puertaPadreRef = useRef();
    const puertaAbuelaRef = useRef();
    const puertaSotanoRef = useRef();

    useHelper(objetoRef, BoxHelper);

    const moverCamara = () => {
        moveObjectToPositionSmoothly(cameraRef, [0, 0.36, -0.8], 800, () => {
            // Esta función se ejecutará cuando la animación termine
        }, false);
    }

    const abrirPuertaXander = abrirPuerta(puertaXanderRef);
    const abrirPuertaPadres = abrirPuerta(puertaPadreRef);
    const abrirPuertaAbuela = abrirPuerta(puertaAbuelaRef);
    const abrirPuertaSotano = abrirPuerta(puertaSotanoRef);

    /* [0, 1, 0] */

    return (
        <group {...props} dispose={null} >

            <group scale={2}>
                {/* Camara */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.camera_001.geometry}
                    material={materials.Material}
                    position={[0, 1, 0]}
                    ref={cameraRef}
                    onClick={moverCamara}
                />
            </group>
            

            {/* Puerta */}
            <group position={[12, 0, -9]}> {/* Entrada Casa */}
                <mesh  /* rotation-y={Math.PI/2} Funcionalidad para Abrir la puerta*/
                    castShadow
                    receiveShadow
                    geometry={nodes.door_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}


                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_frame_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                />
            </group>

            <group position={[1, 0, 3]}> {/* Cuarto Sotano */}
                <mesh  /* rotation-y={Math.PI/2} */
                    castShadow
                    receiveShadow
                    geometry={nodes.door_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                    ref={puertaSotanoRef}
                    onClick={abrirPuertaSotano}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_frame_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                />
            </group>

            <group position={[-6, 0, -3]}> {/* Cuarto Xander  */}
                <mesh  /* rotation-y={Math.PI/2} */
                    castShadow
                    receiveShadow
                    geometry={nodes.door_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                    ref={puertaXanderRef}
                    onClick={abrirPuertaXander}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_frame_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                />
            </group>

            <group position={[-6, 0, 3]}> {/* Cuarto de Padres */}
                <mesh  /* rotation-y={Math.PI/2} */
                    castShadow
                    receiveShadow
                    geometry={nodes.door_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                    ref={puertaPadreRef}
                    onClick={abrirPuertaPadres}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_frame_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                />
            </group>

            <group position={[6, 0, 3]}> {/* Cuarto de Abuela */}
                <mesh  /* rotation-y={Math.PI/2} */
                    castShadow
                    receiveShadow
                    geometry={nodes.door_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                    ref={puertaAbuelaRef}
                    onClick={abrirPuertaAbuela}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_frame_001.geometry}
                    material={materials.Material}
                    position={[0, 0.1, 0]}
                />
            </group>



            {/* Fin Puerta */}



            {/* Lavamanos */}

            <group rotation-y={Math.PI / 2} scale={1.1}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchen_table_001.geometry}
                    material={materials.Material}
                    position={[6, 0.14, 3.22]}
                />
            </group>

            {/* Lavaplatos */}

            <group rotation-y={Math.PI / 2}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchen_sink_001.geometry}
                    material={materials.Material}
                    position={[4.6, 0.14, 3.5]}
                />
            </group>

            {/* Nevera */}
            <group rotation-y={Math.PI / 2} scale={1.3}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.fridge_001.geometry}
                    material={materials.Material}
                    position={[6.58, 0.14, 2.67]}
                />

            </group>

            <group rotation-y={-Math.PI / 2} scale={1.3}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tv_wall_001.geometry}
                    material={materials.Material}
                    position={[-4.7, 0.008, -11.5]}
                />
            </group>





            {/* Mesita Pequeña */}

            <group position={[14, 0, 0.4]} scale={1.2} rotation-y={-Math.PI / 2}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.coffee_table_001.geometry}
                    material={materials.Material}
                    position={[-5.238, 0, 0.745]}
                />
            </group>

            <group rotation-y={Math.PI / 2} position={[11.7, 0, -5.8]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sofa_001.geometry}
                    material={materials.Material}
                    position={[0, 0, 0]}
                />
            </group>

            {/* Piano */}
            <group scale={1.5} rotation-y={-Math.PI / 2} position={[9, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.musical_instrument_001.geometry}
                    material={materials.Material}
                    position={[0, 0, 0]}
                />
            </group>

            <group scale={1.5} rotation-y={-Math.PI / 2} position={[8.8, 0, 2.3]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.scratching_post_001.geometry}
                    material={materials.Material}
                    position={[0, 0, 0]}
                />
            </group>







        </group>
    );
}

export default Objetos;
useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");