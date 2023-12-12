import { refContext } from "./refContext";
import { useState } from "react";

const RefContext = ({ children }) => {
    let [storyProgress, setStoryProgress] = useState({
        scenery: "s1",
        currentStep: 0,
        currentLevel: 0,
        missionDone: false,
    });
    let [isPaused, setIsPaused] = useState(false);

    function updateStoryProgress(newProgress) {
        setStoryProgress({ ...storyProgress, ...newProgress });
    }

    return (
        <refContext.Provider
            value={
                {
                    storyProgress,
                    updateStoryProgress,
                    isPaused,
                    setIsPaused
                }
            }
        >
            {children}
        </refContext.Provider>
    )
}

export default RefContext;
