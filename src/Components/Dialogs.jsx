import { useRef } from "react";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

/*  speed: milliseconds per letter */
export default function Dialogs({ name, lines, speed }) {
	//conversation between two people

	const typewriter = useRef(null);

	return (
		<div className="fixed bottom-6 left-0 w-full p-4 ">
			<div className="max-w-screen-md mx-auto  bg-black bg-opacity-75 text-green-300 p-4 rounded-lg font-mono shadow-md">
				<h1 className="text-white">{name}:</h1>
				<Typewriter
					ref={typewriter}
					words={[lines]}
					loop={1}
					typeSpeed={speed || 50}
				/>
				<br />
			</div>
		</div>
	);
}
