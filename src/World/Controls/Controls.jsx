import { useContext, useEffect } from "react";
import useMovements from "../../utils/keys-movements";
import { refContext } from "../Context/refContext";
import * as THREE from 'three';

const Controls = () => {

    const movements = useMovements();
    const { xanderRef , abuelaRef} = useContext(refContext)

    const handleMoveXander = (targetPosition) => {

        if (xanderRef.current) {
            // Aquí debes aplicar la lógica para mover xander a la posición objetivo (targetPosition).
            // Puedes usar xanderRef.current para acceder a las propiedades de la referencia.
    
            // Ejemplo:
            
            const objetoXander = xanderRef.current;
            const objetoAbuela = abuelaRef.current;
            
            const xander = new THREE.Box3().setFromObject(objetoXander);
            const abuela = new THREE.Box3().setFromObject(objetoAbuela);
            
            if (xander.intersectsBox(abuela)) {
                console.log('El objeto se intersecta con la caja.');
            } else {
                xanderRef.current.position.x = targetPosition[0];
                xanderRef.current.position.y = targetPosition[1];
                xanderRef.current.position.z = targetPosition[2];
                console.log('El objeto no se intersecta con la caja.');
            }
        }
    };


    const handleKeyDown = (event) => {
        const movementActions = {
            forward: [0, 0, -0.3],
            backward: [0, 0, 0.3],
            left: [-0.3, 0, 0],
            right: [0.3, 0, 0],
        };
    
        for (const movement of movements) {
            if (movement.keys.includes(event.code)) {
                console.log(`Tecla presionada: ${movement.name}`);
                const moveVector = movementActions[movement.name];
                if (moveVector && xanderRef.current) {
                    const newPosition = [
                        xanderRef.current.position.x + moveVector[0],
                        xanderRef.current.position.y + moveVector[1],
                        xanderRef.current.position.z + moveVector[2],
                    ];
                    handleMoveXander(newPosition);
                }
            }
        }
    };
    




    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [movements, xanderRef]);



    return (
        <>
        </>
    );


}

export default Controls;