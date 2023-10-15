import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
export default function Dialogs({ conversation }) {
	//conversation between two people
	const [nextDialog, setNextDialog] = useState(false);

	return (
		<div className="fixed bottom-0 left-0 w-full p-4 ">
			<div className="max-w-screen-md mx-auto  bg-black bg-opacity-75 text-green-300 p-4 rounded-lg font-mono shadow-md">
				<h1 className="text-white">{conversation[0].name}:</h1>
				<Typewriter
					words={[conversation[0].lines]}
					loop={1}
					onLoopDone={(e) => {
						setNextDialog(true);
					}}
				/>
				<br />
			</div>
			<button
				onClick={() => {
					setNextDialog(true);
				}}
				className="bg-black text-green-300 py-2 px-4 rounded"
			>
				Siguiente
			</button>
		</div>
	);
}
