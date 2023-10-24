import { useState } from "react";
import Dialogs from "./Components/Dialogs";
import { useEffect } from "react";

const exampleConversation = [
	{
		name: "Xander",
		lines:
			"Mi abuela no puede enterarse de esto. Debo encontrar la forma de ayudarla sin que se preocupe",
	},
	{
		name: "Aria",
		lines:
			"No te preocupes, yo me encargo de todo. Solo debes concentrarte en tu abuela",
	},
	{
		name: "Raven",
		lines:
			"Niño, me agrada tu abuela, pero no puedo hacer nada. No tengo el dinero para pagar la operación",
	},
];

export default function App() {
	const [currentStep, setCurrentStep] = useState(0);
	const [currentLine, setCurrentLine] = useState("");
	const [currentName, setCurrentName] = useState("");
	function setNextStep() {
		if (currentStep === exampleConversation.length - 1) {
			setCurrentStep(0);
			return;
		}

		setCurrentStep((currentStep) => currentStep + 1);
	}
	useEffect(() => {
		setCurrentName(exampleConversation[currentStep].name);
	}, [currentStep]);

	return (
		<div className="app-container">
			{currentName == exampleConversation[currentStep].name ? (
				<Dialogs
					name={exampleConversation[currentStep].name}
					lines={exampleConversation[currentStep].lines}
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
