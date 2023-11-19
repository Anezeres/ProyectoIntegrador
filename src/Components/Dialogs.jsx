import { useRef } from "react";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

/*  speed: milliseconds per letter */
export default function Dialogs({ name, lines, speed }) {
	//conversation between two people

	const typewriter = useRef(null);

	return (
		<div className="fixed bottom-6 left-0 w-full p-4 ">
			<div className="w-[85%] mx-auto select-none bg-black bg-opacity-75 text-[#4cdef8] p-4 rounded-lg font-mono shadow-md text-[35px]  border-2 border-[#765ff5]">
				<h1 className="text-[#ede8f7]">{name}:</h1>
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
