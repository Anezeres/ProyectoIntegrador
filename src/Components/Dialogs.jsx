import { useContext, useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { refContext } from "../Context/refContext";

/*  speed: milliseconds per letter */
export default function Dialogs({
    levels,
    log,
    visible = true,
    handleShowLog,
}) {
    //conversation between two people
    const { storyProgress, updateStoryProgress } = useContext(refContext);
    const [currentName, setCurrentName] = useState("");
    const [currentLines, setCurrentLines] = useState("");

    // POR AHORA TODO CON LEVEL CERO
    const [dialogs, setDialogs] = useState(levels[0]?.dialogs);

    //Actualiza cuando cambia de nivel
    useEffect(() => {
        setDialogs(levels[storyProgress.currentLevel].dialogs);
        if (storyProgress.currentStep === 0) {
            //Para los casos en que el nivel solo tenga 1 dialogo
            setCurrentName(
                levels[storyProgress.currentLevel].dialogs[
                    storyProgress.currentStep
                ].name
            );
            setCurrentLines(
                levels[storyProgress.currentLevel].dialogs[
                    storyProgress.currentStep
                ].lines
            );
        } else {
            updateStoryProgress({
                currentStep: 0,
            });
        }
    }, [storyProgress.currentLevel]);

    //Actualiza cuando cambia al dialogo siguiente
    useEffect(() => {
        setCurrentName(dialogs[storyProgress.currentStep].name);
        setCurrentLines(dialogs[storyProgress.currentStep].lines);
    }, [storyProgress.currentStep]);

    return (
        <div
            id="dialog-block"
            className={`overflow-auto select-none mx-4 md:mx-0 w-[100%] md:w-[80%] min-w-[80%] h-[280px]  bg-opacity-75 text-[#4cdef8] p-4 rounded-lg font-mono shadow-md  text-[30px] md:text-[35px] border-2 border-[#765ff5] ${
                visible ? `bg-[#283a74]` : `bg-gray-800`
            }`}
        >
            {visible ? (
                <>
                    <h1 className="text-[35px] text-center">Recapitulación</h1>
                    <Typewriter
                        key="Recapitulacion"
                        words={[log]}
                        loop={1}
                        typeSpeed={13}
                    />
                    <p></p>
                </>
            ) : (
                <>
                    <h1 className="text-[#ede8f7]">{currentName}:</h1>
                    <Typewriter
                        key={currentLines}
                        words={[currentLines]}
                        loop={1}
                        typeSpeed={13}
                    />
                    <br />
                </>
            )}
        </div>
    );
}
