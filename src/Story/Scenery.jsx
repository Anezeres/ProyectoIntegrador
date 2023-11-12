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
		<>
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
				<PapelComponent log={log} />
			</div>
		</>
	);
}

function logIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
			/>
		</svg>
	);
}

const PapelComponent = ({ log }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleShowPaper = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="fixed bottom-0 left-1 ">
			<button className="text-[#4cdef8]" onClick={handleShowPaper}>
				{logIcon()}
			</button>
			{isVisible && (
				<div className="papel papel-appear w-[85%] mx-auto select-none bg-[#283a74] bg-opacity-95 text-[#4cdef8] p-4 rounded-sm font-mono shadow-md text-[30px]  border-2 border-[#765ff5]">
					<button className="text-[#ee4848]" onClick={handleShowPaper}>
						x
					</button>
					<p>{log}</p>
				</div>
			)}
		</div>
	);
};





