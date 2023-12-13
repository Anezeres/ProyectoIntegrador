import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Continuara = () => {
	const link = `${process.env.PUBLIC_URL}/images/Continuara.jpg`;

	return (
		<div className="w-full h-full flex justify-start items-center flex-col p-10">
			<div className="w-[60%] h-[80%] p-4 " style={{ backgroundImage: `url(${link})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
			<div className="fixed bottom-20   w-[55%] mx-auto select-none bg-black bg-opacity-75 text-[#5272f0] p-4 rounded-lg font-mono shadow-md text-[35px] border-2 border-[#765ff5] flex flex-col justify-center items-center">
				<Typewriter
					key={"currentLines"}
					words={[
						"Esta historia no ha llegado a su fin. Más contenido saldrá la próxima semana, ¡Gracias por jugar!.",
					]}
					loop={1}
					typeSpeed={13}
				/>
				<br />
				<a
					href="/"
					className="text-lg w-[50%] font-bold text-[#1d2a54]  rounded text-center p-2 border-2 border-solid bg-[#5272f0] border-[#4cdef8]"
				>
					Volver al principio
				</a>
			</div>
		</div>
	);
};

export default Continuara;

