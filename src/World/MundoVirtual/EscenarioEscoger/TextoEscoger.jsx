import { Center, Html, Text3D, useGLTF } from "@react-three/drei";
import { useContext, useRef } from "react";


const TextoEscoger = () => {

    


    return (
			<>
				<Center>
					<Html
						position={[2, 1.8, 0]}
						center
						distanceFactor={12}
						visible={false}
					>
						<button
							onClick={() => {
								window.location.href = "s4";
							}}
							className="text-lg  font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3 border-2 border-solid select-none bg-[#edecf6a5]  border-[#765ff5]"
						>
							Volver a Casa
						</button>
					</Html>
				</Center>

				<Center>
					<Html
						position={[8, 1.7, 0.5]}
						center
						distanceFactor={12}
						visible={false}
					>
						<button
							onClick={() => {
								window.location.href = "s6";
							}}
							className="text-lg  font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3 border-2 border-solid select-none bg-[#edecf6e3]  border-[#765ff5]"
						>
							Viajar al Mundo Virtual
						</button>
					</Html>
				</Center>
			</>
		);

    
}

export default TextoEscoger;