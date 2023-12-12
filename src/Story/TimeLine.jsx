import { useContext, useEffect } from "react";
import { characterContext } from "../Context/characterContext";
import { refContext } from "../Context/refContext";
import { cameraContext } from "../Context/cameraContext";




const TimeLine = (props) => {
    const { changePosition, playAnimation, stopAnimation, rotate, teleport, xanderBodyRef, moveMesh, newPosition } = useContext(characterContext)
    const { storyProgress, setIsPaused } = useContext(refContext);
    const { abrirPuerta, doorRef } = useContext(cameraContext)

    useEffect(() => {
        //console.log(storyProgress.currentLevel)
        //console.log(props.ruta)
        switch (props.ruta) {
            case "s1":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setIsPaused(false)
                        playAnimation("Sleep", "Xander", null)
                        break;
                    case 1:
                        abrirPuerta(doorRef)
                        stopAnimation('Xander')
                        playAnimation("WakeUp", "Xander", 5.733333110809326)
                        moveMesh([0, -1, 0], 'Xander')
                        rotate(Math.PI / 2, 'Xander')
                        teleport({ x: -16.5, y: xanderBodyRef.current.translation().y, z: -10.5 }, 'Xander')
                        setIsPaused(true)
                        setTimeout(() => {
                            moveMesh([0, 1, 0], 'Xander')
                            teleport({ x: -15, y: 0.30, z: -10 }, 'Xander')
                            playAnimation('Idle', 'Xander', null)
                            rotate(-Math.PI / 2, 'Xander')
                            setIsPaused(false)
                        }, 5733)
                        break;
                    case 2:
                        stopAnimation('Xander')
                        changePosition([
                            [-15, xanderBodyRef.current.translation().y, -4.8],
                            [-7, xanderBodyRef.current.translation().y, -4.8],
                            [-7, xanderBodyRef.current.translation().y, -8]],
                            'Xander',
                            'Idle',
                            () => {
                                stopAnimation('Xander')
                                rotate(Math.PI / 3, 'Xander')
                                playAnimation('Idle', 'Xander', null)
                            }
                        )
                        break;
                    case 3:
                        stopAnimation('Xander')
                        changePosition([
                            [-7, xanderBodyRef.current.translation().y, -3]],
                            'Xander',
                            'Idle',
                            () => {
                                stopAnimation('Xander')
                                playAnimation('Idle', 'Xander', null)
                            }
                        )
                        break;
                }
                break;
            case "s2":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setIsPaused(false)
                        setTimeout(() => {
                            teleport({ x: -7, y: 0.2, z: -3.2 }, 'Xander')
                            teleport({ x: 6, y: 0.2, z: -7 }, 'Abuela')
                        }, 20)
                        rotate(Math.PI / 3, 'Abuela')
                        playAnimation('Idle', 'Abuela', null)
                        playAnimation('Idle', 'Xander', null)
                        setTimeout(() => {
                            stopAnimation('Xander')
                            changePosition([
                                [-7, xanderBodyRef.current.translation().y, -0],
                                [8, xanderBodyRef.current.translation().y, -0],
                                [8, xanderBodyRef.current.translation().y, -6]],
                                'Xander',
                                'Idle',
                                () => {
                                    stopAnimation('Xander')
                                    rotate(Math.PI / 3, 'Xander')
                                    playAnimation('Idle', 'Xander', null)
                                })
                        }, 2000)
                        break;
                    case 1:
                        break;
                }
                break;
            case "s3":
                switch (storyProgress.currentLevel) {
                    case 0:
                        teleport({ x: 9, y: 1, z: 5 }, "Xander")
                        setIsPaused(false)
                        playAnimation("Idle", "Xander")
                        break;
                    case 1:
                        setIsPaused(true)
                        stopAnimation('Xander')
                        changePosition([
                            [9, xanderBodyRef.current.translation().y, 6],
                            [5.3, xanderBodyRef.current.translation().y, 6]],
                            'Xander',
                            'Idle',
                            () => {
                                stopAnimation('Xander')
                                playAnimation("Idle", "Xander")
                                setIsPaused(false)
                            })
                        break;
                    case 2:
                        stopAnimation('Xander')
                        playAnimation("TalkingPhone", "Xander")
                        break;
                }
                break;
            case "s4":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setIsPaused(false)
                        playAnimation("Idle", "Xander")
                        break;
                    case 1:
                        break;
                }
                break;
            case "s8":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setIsPaused(false)
                        playAnimation("Idle", "Xander")
                        break;
                    case 1:
                        break;
                }
                break;
        }
    }, [storyProgress.currentLevel]);


}

export default TimeLine;