import { useState, useEffect, useContext } from "react";
import Dialogs from "../Components/Dialogs";
import { refContext } from "../World/Context/refContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Scenery({ levels, nextScenery }) {
	const [currentStep, setCurrentStep] = useState(0);

	const [currentName, setCurrentName] = useState("");
	const { storyProgress, updateStoryProgress } = useContext(refContext);
	// POR AHORA TODO CON LEVEL CERO
	const [dialogs, setDialogs] = useState(levels[0].dialogs);
	const [log, setLog] = useState(levels[0].log);

	const webHistory = useHistory();
	function setNextStep() {
		setCurrentStep((currentStep) => currentStep + 1);
		if (currentStep === dialogs.length - 1) {
			setCurrentStep(0);
			webHistory.push("/" + nextScenery);
			updateStoryProgress({
				scenery: "s2",
				// level: storyProgress.level + 1
			});
		}
	}
	useEffect(() => {
		setCurrentName(dialogs[currentStep].name);
	}, [currentStep]);

	useEffect(() => {
		// setCurrentName("dialogs[0].name");
		// setCurrentStep(0);
		setLog(levels[0].log);
	}, []);
	return (
		<div className="app-container">
			<div className="text-white">{log}</div>

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
