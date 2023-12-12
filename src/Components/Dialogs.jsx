import { useContext, useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { refContext } from "../World/Context/refContext";

/*  speed: milliseconds per letter */
export default function Dialogs({ levels }) {
	//conversation between two people
	const typewriter = useRef(null);
	const { storyProgress, updateStoryProgress } = useContext(refContext);
	const [currentName, setCurrentName] = useState("");
	const [currentLines, setCurrentLines] = useState("");

	// POR AHORA TODO CON LEVEL CERO
	const [dialogs, setDialogs] = useState(levels[0]?.dialogs);

	useEffect(() => {
		setDialogs(levels[storyProgress.currentLevel].dialogs);
		if (storyProgress.currentLevel === levels.length - 1) {
			setCurrentName(dialogs[storyProgress.currentStep].name);
			setCurrentLines(dialogs[storyProgress.currentStep].lines);
			console.log('entre')
		} else {
			updateStoryProgress({
				currentStep: 0,
			});
		}
		
		console.log("currentLevel:", storyProgress.currentLevel);
	}, [storyProgress.currentLevel]);

	useEffect(() => {
		setCurrentName(dialogs[storyProgress.currentStep].name);
		setCurrentLines(dialogs[storyProgress.currentStep].lines);
		console.log("currentStep:", storyProgress.currentStep);
		console.log("currentLine:", dialogs[storyProgress.currentStep].lines);

	}, [storyProgress.currentStep]);

	return (
		<div className="fixed bottom-6 left-0 w-full p-4 ">
			<div className="w-[85%] mx-auto select-none bg-black bg-opacity-75 text-[#4cdef8] p-4 rounded-lg font-mono shadow-md text-[35px] border-2 border-[#765ff5]">
				<h1 className="text-[#ede8f7]">{currentName}:</h1>
				<Typewriter
					key={currentLines}
					ref={typewriter}
					words={[currentLines]}
					loop={1}
					typeSpeed={10}
				/>
				<br />
			</div>
		</div>
	);
}
