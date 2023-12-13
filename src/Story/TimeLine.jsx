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
                        setIsPaused(true)
                        changePosition([
                            [-15, xanderBodyRef.current.translation().y, -4.8],
                            [-7, xanderBodyRef.current.translation().y, -4.8],
                            [-7, xanderBodyRef.current.translation().y, -8]],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                rotate(Math.PI / 3, 'Xander')
                                playAnimation('Idle', 'Xander', null)
                                setIsPaused(false)
                            }
                        )
                        break;
                    case 3:
                        stopAnimation('Xander')
                        setIsPaused(true)
                        changePosition([
                            [-7, xanderBodyRef.current.translation().y, -3]],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                playAnimation('Idle', 'Xander', null)
                                setIsPaused(false)
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
                        setTimeout(() => {
                            teleport({ x: 0, y: 0, z: 0 }, 'Xander')
                        }, 20)
                        playAnimation("Idle", "Xander")
                        break;
                    case 1:
                        stopAnimation('Xander')
                        setIsPaused(true)
                        changePosition([
                            [-2, xanderBodyRef.current.translation().y, 0],
                            [-2, xanderBodyRef.current.translation().y, 3]],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                rotate(-Math.PI / 2, 'Xander')
                                playAnimation('Searching', 'Xander')
                                setIsPaused(false)
                            })
                        break;
                    case 2:
                        stopAnimation('Xander')
                        rotate(Math.PI / 2, 'Xander')
                        setIsPaused(true)
                        changePosition([
                            [-2, xanderBodyRef.current.translation().y, -3]],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                rotate(Math.PI / 2, 'Xander')
                                playAnimation('Searching', 'Xander')
                                setIsPaused(false)
                            })
                        break;
                    case 3:
                        setIsPaused(true)
                        stopAnimation('Xander')
                        rotate(Math.PI / 2, 'Xander')
                        playAnimation('Finding', 'Xander', 13.70)
                        setTimeout(() => {
                            teleport({ x: -2, y: xanderBodyRef.current.translation().y, z: 1.4 }, 'Xander')
                            playAnimation('Idle', 'Xander')
                            setIsPaused(false)
                        }, 13700)
                        break;
                }
                break;
            case "s5":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setIsPaused(false)
                        playAnimation("Idle", "Xander")
                        rotate(Math.PI / 2, 'Xander')
                        break;
                    case 1:
                        changePosition([
                            [4, xanderBodyRef.current.translation().y, 0],
                            [4, xanderBodyRef.current.translation().y, 2]],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                playAnimation("Idle", 'Xander')
                            })
                        break;
                }
                break;
            case "s6":
                switch (storyProgress.currentLevel) {
                    case 0:
                        playAnimation("SittingStyle", "Xander")
                        rotate(Math.PI / 2, 'Xander')
                        break;
                    case 1:
                        playAnimation('Angry', 'Xander')
                        break;
                }
                break;
            case "s7":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setTimeout(() => {
                            teleport({ x: -11, y: 1, z: 0 }, 'Xander')
                        }, 20)
                        rotate(Math.PI / 2, 'Xander')
                        playAnimation("Idle", "Xander")
                        break;
                    case 1:
                        stopAnimation('Xander')
                        setIsPaused(true)
                        changePosition([
                            [-5.5, xanderBodyRef.current.translation().y, 0],],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                playAnimation('Searching', 'Xander')
                                setIsPaused(false)
                            })
                        break;
                    case 2:
                        break;
                    case 3:
                        stopAnimation('Xander')
                        setIsPaused(true)
                        changePosition([
                            [4, xanderBodyRef.current.translation().y, 0],],
                            'Xander',
                            () => {
                                stopAnimation('Xander')
                                rotate(-Math.PI / 2, 'Xander')
                                playAnimation('Idle', 'Xander')
                                setIsPaused(false)
                            })
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