import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";


const Decoraciones = (props) =>  {
    const { nodes, materials } = useGLTF("/assets/Models/Decoraciones/ObjetosHogar.glb");

    const objetoRef = useRef();

    useHelper(objetoRef, BoxHelper);

    return (
      <group {...props} dispose={null} >

        {/* Ropa */}

        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.bathroom_item_001.geometry}
          material={materials.Material}
          position={[-3.56, 0.015, 2.046]}
        />

        {/* Lavadora */}

        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.washing_machine_001.geometry}
          material={materials.Material}
          position={[4.721, -0.005, 1.157]}
        />

        {/* Cama */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.bed_001.geometry}
          material={materials.Material}
          position={[-2.582, -0.004, -1.005]}
        />

        {/* Closet */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.closet_001.geometry}
          material={materials.Material}
          position={[1.337, 0.003, -1.844]}
        />

        {/* Closet Azul*/}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.closet_002.geometry}
          material={materials.Material}
          position={[4.828, 0, -1.815]}
        />

        {/* Camisa */}

        <mesh  
          castShadow
          receiveShadow
          geometry={nodes.clothes_001.geometry}
          material={materials.Material}
          position={[-1.974, 1.008, 2.022]}
        />

        {/* Toallas */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.clothes_002.geometry}
          material={materials.Material}
          position={[4.733, 0.026, 1.98]}
        />

        {/* Mesita Pequeña */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.coffee_table_001.geometry}
          material={materials.Material}
          position={[-5.238, 0, 0.745]}
        />

        {/* Puerta */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.door_001.geometry}
          material={materials.Material}
          position={[2.735, 0, -1.812]}
        />
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.door_frame_001.geometry}
          material={materials.Material}
          position={[2.735, 0, -1.812]}
        />

        {/* Fin Puerta */}

        {/* Cafetera */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.coffee_machine_001.geometry}
          material={materials.Material}
          position={[1.67, 0.008, 1.97]}
        />

        {/* Camara */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.camera_001.geometry}
          material={materials.Material}
          position={[2.529, 0.033, 1.98]}
        />

        {/* Futolito */}

        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.air_hockey_001.geometry}
          material={materials.Material}
          position={[1.277, 0.327, -0.347]}
        />

        {/* Maceta */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.flower_001.geometry}
          material={materials.Material}
          position={[0.035, 0.003, 2.026]}
        />

        {/* Silla Verde */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.kitchen_chair_001.geometry}
          material={materials.Material}
          position={[-4.246, 0.001, 2.094]}
        /> 

        {/* Lavamanos */}

        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.kitchen_table_001.geometry}
          material={materials.Material}
          position={[-4.895, 0, -0.619]}
        />

        {/* Nevera */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.fridge_001.geometry}
          material={materials.Material}
          position={[3.26, 0.031, -0.395]}
        />

        {/* Microondas */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.microwave_oven_001.geometry}
          material={materials.Material}
          position={[3.084, 0.044, 1.983]}
        />

        {/* Lavaplatos */}

        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.kitchen_sink_001.geometry}
          material={materials.Material}
          position={[-0.858, -0.249, -0.373]}
        />

        {/* Lampara */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.lamp_001.geometry}
          material={materials.Material}
          position={[-0.536, 0, 2.006]}
        />

        {/* Luz de mesa */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.lamp_002.geometry}
          material={materials.Material}
          position={[-2.806, 0.005, 2.013]}
        />

        {/* Silla Café */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.lounge_chair_001.geometry}
          material={materials.Material}
          position={[-5.054, 0.004, 2.068]}
        />

        {/* Piano */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.musical_instrument_001.geometry}
          material={materials.Material}
          position={[1.257, 0, 0.734]}
        />

        {/* Mesa Gamer */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.office_table_001.geometry}
          material={materials.Material}
          position={[-2.894, -0.006, 0.728]}
        />

        {/* Casa del Gato */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.scratching_post_001.geometry}
          material={materials.Material}
          position={[4.689, 0, 0.09]}
        />

        {/* Papeles */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.box_001.geometry}
          material={materials.Material}
          position={[2.095, -0.009, 1.999]}
        />

        {/* Mueble */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.dresser_001.geometry}
          material={materials.Material}
          position={[-0.885, -0.022, 0.676]}
        />

        {/* Salsa de Tomate */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.ketchup_001.geometry}
          material={materials.Material}
          position={[0.968, -0.123, 1.991]}
        />

        {/* Dulcecitos */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.dish_001.geometry}
          material={materials.Material}
          position={[0.508, -0.039, 2.002]}
        />

        {/* Mas dulces Rojos */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.dish_002.geometry}
          material={materials.Material}
          position={[0.783, -0.048, 2.005]}
        />

        {/* Coca Cola */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.drink_001.geometry}
          material={materials.Material}
          position={[1.329, -0.131, 1.992]}
        />
        {/* Leche */}
        
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.drink_002.geometry}
          material={materials.Material}
          position={[1.137, 0.082, 1.991]}
        />

        {/* Carrito */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.toy_001.geometry}
          material={materials.Material}
          position={[-1.161, 0.003, 2.046]}
        />

        {/* Tablero */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.toy_002.geometry}
          material={materials.Material}
          position={[4.729, 0.004, -0.819]}
        />

        {/* Sofá */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.sofa_001.geometry}
          material={materials.Material}
          position={[-0.684, 0.004, -1.721]}
        />

        {/* Pesas */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.dumbbell_001.geometry}
          material={materials.Material}
          position={[3.904, 0.116, 1.858]}
        />

        {/* Maquina Ejercicio */}
        <mesh  
          castShadow
          receiveShadow
          geometry={nodes.training_item_001.geometry}
          material={materials.Material}
          position={[3.241, 0.038, 0.91]}
        />
        <mesh  
          castShadow
          receiveShadow
          geometry={nodes.dumbbell_002.geometry}
          material={materials.Material}
          position={[3.902, 0.116, 2.246]}
        />
        <mesh  
          castShadow
          receiveShadow
          geometry={nodes.training_item_002.geometry}
          material={materials.Material}
          position={[-5.846, 0, 2.067]}
          />
        {/* Fin Pesas */}

        {/* Televisor */}
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.tv_wall_001.geometry}
          material={materials.Material}
          position={[-4.855, 0.008, -1.846]}
        />
      </group>
    );
  }
  
export default Decoraciones;
  useGLTF.preload("/assets/Models/Decoraciones/ObjetosHogar.glb");