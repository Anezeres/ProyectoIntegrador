import Escalera from "../SecondFloor/Escalera";
import Objetos from "../SecondFloor/Objetos";
import Platform from "./Platform";
import Walls from "./Walls";

const SecondFloor = () => {

    return (
        <>

            <Platform/>
            <Walls/>
            <Escalera/>
            <Objetos position={[0,0,0]} scale={1.3}/>

        </>
    )

}

export default SecondFloor;