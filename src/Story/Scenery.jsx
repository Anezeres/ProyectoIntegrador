import { useState, useEffect, useContext } from "react";
import Dialogs from "../Components/Dialogs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { refContext } from "../World/Context/refContext";


export default function Scenery({ levels, nextScenery }) {
	const { storyProgress, updateStoryProgress } = useContext(refContext)

	const [currentStep, setCurrentStep] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [currentName, setCurrentName] = useState("");
	// POR AHORA TODO CON LEVEL CERO
	const [dialogs, setDialogs] = useState(levels[0].dialogs);
	const [log, setLog] = useState(levels[0].log);

	const webHistory = useHistory();
	function setNextStep() {
		levels[currentLevel].dialogs[currentStep + 1] &&
			setCurrentStep((currentStep) => currentStep + 1);
		if (currentStep === dialogs.length - 1) {
			console.log(currentLevel)
			console.log(levels.length - 1)
			if (currentLevel === levels.length - 1) { //pasar al siguiente escenario

				webHistory.push("/" + nextScenery);
				return updateStoryProgress({
					scenery: nextScenery,
					currentLevel: storyProgress.currentLevel + 1
				});
			} else { // pasar al siguiente nivel
				setCurrentName("");
				setCurrentStep(0);
				setCurrentLevel(currentLevel + 1);

				levels[currentLevel + 1] &&
					setDialogs(levels[currentLevel + 1].dialogs);

				return updateStoryProgress({
					scenery: storyProgress.scenery,
					currentLevel: storyProgress.currentLevel + 1
				});
			}
		}
	}
	useEffect(() => {
		dialogs[currentStep] && setCurrentName(dialogs[currentStep].name);
	}, [currentStep]);

	useEffect(() => {
		setDialogs(levels[currentLevel].dialogs);
		setLog(levels[currentLevel].log);
	}, [currentLevel]);
	return (
		<div className="app-container">
			{/* <div className="text-white">{log}</div> */}

			{currentName == dialogs[currentStep].name ? (
				<Dialogs
					name={dialogs[currentStep].name}
					lines={dialogs[currentStep].lines}
					speed={30}
				/>
			) : null}
			<button
				onClick={() => {
					setNextStep();
				}}
				className="bg-black text-green-300 py-2 px-4 rounded next-line-btn m-7"
			>
				Siguiente
			</button>
		</div>
	);
}
