import React from "react";
import { Typewriter } from "react-simple-typewriter";

const GameOver = () => {
	return (
		<div className="fixed top-[25%] left-[25%] w-[50%] p-4 ">
			<div className="w-[85%] mx-auto select-none bg-black bg-opacity-75 text-[#5272f0] p-4 rounded-lg font-mono shadow-md text-[35px] border-2 border-[#765ff5] flex flex-col justify-center  items-center">
				<h1 className="text-[#ede8f7]">Perdiste:</h1>
				<Typewriter
					key={"currentLines"}
					words={[
						"No puedo creer que hayas vuelto... Tu abuela perdio la vida ... . Elige mejor la proxima vez",
					]}
					loop={1}
					typeSpeed={13}
				/>
				<br />
				<a
					href="/s3"
					className="text-lg w-[50%] font-bold text-[#1d2a54]  rounded text-center p-2 border-2 border-solid bg-[#5272f0] border-[#4cdef8]"
				>
					Me arrepentí
				</a>
			</div>
		</div>
	);
};

export default GameOver;
