import { MathUtils } from 'three';
import { useThree } from "@react-three/fiber";
import { cameraContext } from "./cameraContext";




const CameraContext = ({ children }) => {
	

	const { camera } = useThree();

    const handleCameraPositionChange = (newPosition) => {
        setCameraPosition(newPosition);
    };

    function moveObjectToPositionSmoothly(objectRef, targetPosition, duration, onMoveComplete, shouldDestroy = false) {
        if (objectRef.current) {
            const lerpFactor = 0.001;
            const initialPosition = objectRef.current.position.clone();
            let startTime = null;

            function animate(time) {
                if (!startTime) startTime = time;
                const elapsedTime = time - startTime;

                if (elapsedTime < duration) {
                    const t = Math.min(elapsedTime / duration, 1);
                    const newPosition = {
                        x: MathUtils.lerp(initialPosition.x, targetPosition[0], t),
                        y: MathUtils.lerp(initialPosition.y, targetPosition[1], t),
                        z: MathUtils.lerp(initialPosition.z, targetPosition[2], t),
                    };
                    objectRef.current.position.set(newPosition.x, newPosition.y, newPosition.z);
                    requestAnimationFrame(animate);
                } else {
                    // La animación ha terminado, llamamos al callback
                    if (typeof onMoveComplete === 'function') {
                        onMoveComplete();
                    }
                    // Si shouldDestroy es true, eliminamos el objeto
                    if (shouldDestroy) {
                        if (objectRef.current) {
                            objectRef.current.parent.remove(objectRef.current);
                        }
                    }
                }
            }

            requestAnimationFrame(animate);
        }
    }

    const abrirPuerta = (refPuerta) => {
        return () => {
            if (refPuerta.current) {
                if (!refPuerta.isAbierta) {
                    // Abre la puerta 90°
                    const rotacionYDeseada = Math.PI / 2;
                    refPuerta.current.rotation.y = rotacionYDeseada;
                    refPuerta.isAbierta = true;
                } else {
                    // Devuelve la puerta a su posición original
                    const rotacionYOriginal = 0;
                    refPuerta.current.rotation.y = rotacionYOriginal;
                    refPuerta.isAbierta = false;
                }
            }
        };
    };


    return (
        <cameraContext.Provider
            value={
                {
                    moveObjectToPositionSmoothly,
                    abrirPuerta,
                    camera,
                }
            }
        >
            {children}
        </cameraContext.Provider>
    )
}

export default CameraContext;
