import { useContext, useEffect } from "react";
import { characterContext } from "../World/Context/characterContext";
import { refContext } from "../World/Context/refContext";




const TimeLine = (props) => {
    const { changePosition, playAnimation, stopAnimation, rotate, teleport, xanderBodyRef, moveMesh, newPosition } = useContext(characterContext)
    const { storyProgress, setIsPaused } = useContext(refContext);

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
                        playAnimation("Idle", "Xander")

                        break;
                    case 1:
                        break;
                }
                break;
            case "s3":
                switch (storyProgress.currentLevel) {
                    case 0:
                        setIsPaused(false)
                        playAnimation("Idle", "Xander")
                        break;
                    case 1:
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