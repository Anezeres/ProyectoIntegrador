import { useContext, useEffect } from "react";
import { characterContext } from "../World/Context/characterContext";
import { refContext } from "../World/Context/refContext";



const TimeLine = () => {
    const { changePosition, playAnimation, playAnimationWithDuration, stopAnimation, rotate, teleport, xanderBodyRef, moveMesh, newPosition } = useContext(characterContext)
    const { storyProgress } = useContext(refContext);

    useEffect(() => {
        async function case2() {
            try {
                await changePosition([
                    [-15, xanderBodyRef.current.translation().y, -8],
                    [-17, xanderBodyRef.current.translation().y, -8],
                    [-17, xanderBodyRef.current.translation().y, -4.8],
                    [-7, xanderBodyRef.current.translation().y, -4.8],
                    [-7, xanderBodyRef.current.translation().y, -4.3]],
                    'Xander',
                    'Idle');
            } catch (error) {
                console.error("Error:", error);
                // Manejar el error de alguna manera
            }
        }
        console.log(storyProgress.currentLevel)
        switch (storyProgress.scenery) {
            case "s1":
                switch (storyProgress.currentLevel) {
                    case 0:
                        playAnimation("Sleep", "Xander")
                        break;
                    case 1:
                        playAnimationWithDuration("WakeUp", "Xander", 5.733333110809326)
                        moveMesh([0, -1, 0], 'Xander')
                        rotate(Math.PI / 2, 'Xander')
                        teleport({ x: -16.5, y: xanderBodyRef.current.translation().y, z: -10.5 }, 'Xander')
                        setTimeout(() => {
                            moveMesh([0, 1, 0], 'Xander')
                            teleport({ x: -15, y: 0.30, z: -10 }, 'Xander')
                            playAnimation('Idle', 'Xander')
                            rotate(-Math.PI / 2, 'Xander')
                        }, 5733)
                        break;
                    case 2:
                        case2()

                        break;
                }
                break;
            case "s2":
                switch (storyProgress.currentLevel) {
                    case 0:
                        break;
                    case 1:
                        break;
                }
                break;
            case "s3":
                switch (storyProgress.currentLevel) {
                    case 0:
                        break;
                    case 1:
                        break;
                }
                break;
        }
    }, [storyProgress.currentLevel]);


}

export default TimeLine;