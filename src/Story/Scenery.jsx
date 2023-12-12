import { useState, useEffect, useContext } from "react";
import Dialogs from "../Components/Dialogs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { refContext } from "../World/Context/refContext";
import useSound from "use-sound";

export default function Scenery({ levels, nextScenery, currentScenary, thereIsMission }) {
	const { storyProgress, updateStoryProgress, isPaused } = useContext(refContext);

	const [logVisible, setLogVisible] = useState(false);

	const [log, setLog] = useState(levels[0]?.log);

	useEffect(() => {
		setLog(levels[storyProgress.currentLevel].log);
	}, [storyProgress.currentLevel]);

	//Sonidos
	const [playSound] = useSound("assets/sounds/click.mp3", {
		volume: 0.1,
	});
	const [playRingSound] = useSound("assets/sounds/ring.m4a", {
		volume: 0.3,
	});

	const [playDramaticSound] = useSound("assets/sounds/dramatic-hit.wav", {
		volume: 0.5,
		loop: true,
	});
	const webHistory = useHistory();




	//Continua la historia
	function setNextStep() {
		console.log("Entering setNextStep");

		if (storyProgress.currentStep === levels[storyProgress.currentLevel].dialogs.length - 1) {
			if (storyProgress.currentLevel === levels.length - 1) {
				updateStoryProgress({
					currentLevel: 0,
				});

				if (nextScenery[0] == "s") {
					window.location.href = "/" + nextScenery;
				} else {
					webHistory.push("/" + nextScenery);
				}
			} else {
				updateStoryProgress({
					currentLevel: storyProgress.currentLevel + 1,
				});
			}
		} else {
			updateStoryProgress({
				currentStep: storyProgress.currentStep + 1,
			});
		}

		//Sonido
		if (
			dialogs[currentStep + 1]?.name &&
			"Xander (mientras suena el Celular)" == dialogs[currentStep + 1].name
		) {
			playRingSound();
			playDramaticSound();
		}

	}


	//Muestra o no el log
	const handleShowLog = () => {
		setLogVisible(!logVisible);
	};

	return (
		<>
			<div className="app-container">
				<>
					<Dialogs levels={levels} />
					<PapelComponent
						log={log}
						visible={logVisible}
						handleShowLog={handleShowLog}
					/>
				</>
				<button
					onClick={() => {
						playSound();

						if (levels[storyProgress.currentLevel].showLog) {
							if (storyProgress.missionDone && thereIsMission) {
								setNextStep() //puede continuar
							} else if (!storyProgress.missionDone && thereIsMission) {
								handleShowLog() //abre el log
							}
						} else if (!isPaused) { //si no esta pausado sigue la historia
							setNextStep();
						}
					}}
					className={
						`text-lg  font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3 border-2 border-solid select-none
						${logVisible ? 'mr-32' : ''} 
						${isPaused ? 'bg-[#765ff5] text-gray-300 border-[#765ff5]' : 'bg-[#4cdef8] border-[#4cdef8]'}
						`
					}
				>
					{logVisible ? "Entendido" : `${isPaused ? 'Espera' : 'Siguiente'}`}
				</button>
			</div >
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

const PapelComponent = ({ log, visible = true, handleShowLog }) => {
	return (
		<div className="fixed bottom-0 left-1 ">
			<button className="text-[#4cdef8]" onClick={handleShowLog}>
				{logIcon()}
			</button>
			{visible && (
				<div className="papel papel-appear w-[85%] mx-auto select-none bg-[#283a74] bg-opacity-95 text-[#4cdef8] p-4 rounded-sm font-mono shadow-md text-[30px]  border-2 border-[#765ff5]">
					<button className="text-[#ee4848]" onClick={handleShowLog}>
						x
					</button>
					<p>{log}</p>
				</div>
			)}
		</div>
	);
};





