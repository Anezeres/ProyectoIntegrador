import { useState, useEffect, useContext } from "react";
import Dialogs from "../Components/Dialogs";
import { refContext } from "../World/Context/refContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Scenery({ levels, nextScenery }) {
	const [currentStep, setCurrentStep] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(0);
		const [currentName, setCurrentName] = useState("");
	const [currentLines, setCurrentLines] = useState("");
	const { storyProgress, updateStoryProgress } = useContext(refContext);
	// POR AHORA TODO CON LEVEL CERO
	const [dialogs, setDialogs] = useState(levels[0].dialogs);
	const [log, setLog] = useState(levels[0].log);

	const webHistory = useHistory();
	function setNextStep() {
		levels[currentLevel].dialogs[currentStep + 1] &&
			setCurrentStep((currentStep) => currentStep + 1);
		setCurrentName("");

		if (currentStep === dialogs.length - 1) {
			if (currentLevel === levels.length - 1) {
				setCurrentName(""); //hacer esto cada vez que cambié el step
				setCurrentLevel(0);
				setCurrentStep(0);

				webHistory.push("/" + nextScenery);
				return updateStoryProgress({
					scenery: nextScenery,
					// level: storyProgress.level + 1
				});
			} else {
				setCurrentName("");
				setCurrentStep(0);
				setCurrentLevel(currentLevel + 1);
				levels[currentLevel + 1] &&
					setDialogs(levels[currentLevel + 1].dialogs);
			}
		}
	}
	useEffect(() => {
		dialogs[currentStep] && setCurrentName(dialogs[currentStep].name);
		setCurrentLines(dialogs[currentStep].lines);
	}, [currentStep]);

	useEffect(() => {
		setDialogs(levels[currentLevel].dialogs);
		setLog(levels[currentLevel].log);
	}, [currentLevel]);
	return (
		<div className="app-container">
			{/* <div className="text-white">{log}</div> */}

			{currentName == dialogs[currentStep].name ? (
				<Dialogs name={currentName} lines={currentLines} speed={30} />
			) : null}
			<button
				onClick={() => {
					setNextStep();
				}}
				className="text-lg bg-[#4cdef8] font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3"
			>
				Siguiente
			</button>
		</div>
	);
}
