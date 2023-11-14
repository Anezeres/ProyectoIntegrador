import { refContext } from "./refContext";
import { useState } from "react";

const RefContext = ({ children }) => {
	let [storyProgress, setStoryProgress] = useState({ scenery: "s1", currentLevel: 0 });
  function updateStoryProgress(newProgress) {
		setStoryProgress({ ...storyProgress, ...newProgress });
	}

    return (
        <refContext.Provider
            value={
                {
                    storyProgress, 
                    updateStoryProgress
                }
            }
        >
            {children}
        </refContext.Provider>
    )
}

export default RefContext;
