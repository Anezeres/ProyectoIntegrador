import { useState, useEffect } from "react";
import Dialogs from "../Components/Dialogs";
const exampleConversation = [
	{
		name: "Xander",
		lines:
			"Son las 6pm, tengo hambre, y no he podido comer nada desde el desayuno.\n¿Qué hay de comer?",
	},
	{
		name: "Abuela",
		lines: "Mijo! baje a comer sancocho.",
	},
	{
		name: "Xander",
		lines: "Oh no, no me gusta el sancocho, ¿Cómo podré librarme del sancocho?",
	},
];
export default function Scenery() {
	const [currentStep, setCurrentStep] = useState(0);
	const [currentLine, setCurrentLine] = useState("");
	const [currentName, setCurrentName] = useState("");
	function setNextStep() {
		setCurrentStep((currentStep) => currentStep + 1);
		if (currentStep === exampleConversation.length - 1) {
			setCurrentStep(0);
		}
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
