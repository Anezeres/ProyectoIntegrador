
import CuartoXander from "./CuartoXander/CuartoXander";
import Corredor from "./Corredor/Corredor";
import CuartoAbuela from "./CuartoAbuela/CuartoAbuela";
import CuartoPadres from "./CuartoPadres/CuartoPadres";
import { Physics, RigidBody } from "@react-three/rapier";
import { refContext } from "../Context/refContext";
import { useContext, useEffect } from "react";
import { characterContext } from "../Context/characterContext";



const SecondFloor = () => {
    const { changePosition } = useContext(characterContext)
    const { storyProgress } = useContext(refContext);

    
    useEffect(() => {
        console.log('entre')
        console.log(storyProgress.currentLevel)

        if(storyProgress.currentLevel == 1){
            changePosition([-7, 0, 9],"Xander")
        }
    }, [storyProgress.currentLevel]);
    return (
			<>
				<CuartoXander />
				{/* <Corredor/> */}
				{/* <CuartoAbuela/>
            <CuartoPadres/> */}
			</>
		);

}

export default SecondFloor;