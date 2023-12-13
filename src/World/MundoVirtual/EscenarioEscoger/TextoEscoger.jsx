import { Center, Html, Text3D, useGLTF } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import { refContext } from "../../../Context/refContext";


const TextoEscoger = () => {


	const [isActive, setIsActive] = useState(false)
	const { storyProgress } = useContext(refContext)

	useEffect(() => {
		//console.log("storyProgress.currentLevel: ", storyProgress.currentLevel)
		//console.log("storyProgress.scenery: ", storyProgress.scenery)
		//console.log("storyProgress.currentStep: ", storyProgress.currentStep)
		if (
			storyProgress.currentStep == 0 &&
			storyProgress.currentLevel == 2 &&
			storyProgress.scenery == "s5"
		) {
			setIsActive(true);
		}

	}, [storyProgress.currentLevel, storyProgress.currentStep]);
	return (
		<>

			<Center>
				<Html
					position={[2, 1.8, 0]}
					center
					distanceFactor={12}
					visible={false}
				>
					{isActive &&
						<button
							onClick={() => {
								window.location.href = "s6";
							}}
							className="text-lg  font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3 border-2 border-solid select-none bg-[#edecf6a5]  border-[#765ff5]"
						>
							Volver a Casa
						</button>
					}
				</Html>
			</Center>


			{isActive &&
				<Center>
					<Html
						position={[8, 1.7, 0.5]}
						center
						distanceFactor={12}
						visible={false}
					>
						<button
							onClick={() => {
								window.location.href = "s7";
							}}
							className="text-lg  font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3 border-2 border-solid select-none bg-[#edecf6e3]  border-[#765ff5]"
						>
							Viajar al Mundo Virtual
						</button>
					</Html>
				</Center>
			}
		</>
	);


}

export default TextoEscoger;