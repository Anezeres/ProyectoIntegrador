import React from "react";
import { Typewriter } from "react-simple-typewriter";

const GameOver = () => {
	const link = `${process.env.PUBLIC_URL}/images/GameOver.jpg`;

	return (
		<div className="w-full h-full flex justify-start items-center flex-col p-6">
			<div className="w-[40%] h-[80%] p-4 " style={{ backgroundImage: `url(${link})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
			<div className="fixed bottom-10   w-[55%] mx-auto select-none bg-black bg-opacity-75 text-[#5272f0] p-4 rounded-lg font-mono shadow-md text-[35px] border-2 border-[#765ff5] flex flex-col justify-center items-center">
				<Typewriter
					key={"currentLines"}
					words={[
						"No puedo creer que hayas vuelto... Tu abuela perdió la vida... Elige mejor la proxima vez",
					]}
					loop={1}
					typeSpeed={13}
				/>
				<br />
				<a
					href="/s5"
					className="text-lg w-[50%] font-bold text-[#1d2a54]  rounded text-center p-2 border-2 border-solid bg-[#5272f0] border-[#4cdef8]"
				>
					Volver a jugar
				</a>
			</div>
		</div>
	);
};

export default GameOver;
