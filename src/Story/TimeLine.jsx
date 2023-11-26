import { useContext, useEffect } from "react";
import { characterContext } from "../World/Context/characterContext";
import { refContext } from "../World/Context/refContext";



const TimeLine = () => {
    const { changePosition, playAnimation, playAnimationWithDuration, rotate, teleport, xanderBodyRef } = useContext(characterContext)
    const { storyProgress } = useContext(refContext);

    useEffect(() => {
        console.log('entre')
        console.log(storyProgress.currentLevel)
        switch (storyProgress.scenery) {
            case "s1":
                switch (storyProgress.currentLevel) {
                    case 0:
                        playAnimation("Sleep", "Xander")
                        break;
                    case 1:
                        rotate(Math.PI/2,'Xander')
                        teleport({x:-16.5, y:xanderBodyRef.current.translation().y, z:-10.5},'Xander')
                        playAnimationWithDuration("WakeUp", "Xander", 5.733333110809326)
                        //teletransportar personaje
                        break;
                    case 2:
                        changePosition([-7, 0, 9], "Xander");
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