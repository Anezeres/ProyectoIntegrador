import { useState, useEffect, useContext } from "react";
import Dialogs from "../Components/Dialogs";
import useSound from "use-sound";
import { refContext } from "../Context/refContext";

export default function Scenery({
    levels,
    nextScenery,
    currentScenery,
    thereIsMission,
}) {
    const { storyProgress, updateStoryProgress, isPaused } =
        useContext(refContext);
    const [logVisible, setLogVisible] = useState(false);
    const [log, setLog] = useState(levels[0]?.log);

    //Carga los sonidos
    const [playSound] = useSound("assets/sounds/click.mp3", {
        volume: 0.1,
    });
    const [playRingSound] = useSound("assets/sounds/ring.m4a", {
        volume: 0.1,
    });
    const [playDramaticSound] = useSound("assets/sounds/dramatic-hit.wav", {
        volume: 0.5,
        loop: true,
    });
    const [playIntroSound] = useSound("assets/sounds/aleatales-intro.mp3", {
        volume: 0.5,
    });

    //Continua la historia
    function setNextStep() {
        if (
            storyProgress.currentStep ===
            levels[storyProgress.currentLevel].dialogs.length - 1
        ) {
            if (storyProgress.currentLevel === levels.length - 1) {
                //Cuando cambia de escenario
                updateStoryProgress({
                    scenery: nextScenery,
                    currentLevel: 0,
                });
                window.location.href = "/" + nextScenery;
            } else {
                updateStoryProgress({
                    //Cuando cambia de nivel
                    currentLevel: storyProgress.currentLevel + 1,
                });
            }
        } else {
            updateStoryProgress({
                //Cuando cambia de a siguiente dialogo
                currentStep: storyProgress.currentStep + 1,
            });
        }

        //Sonido
        if (
            storyProgress.currentLevel === 0 &&
            storyProgress.scenery === "s3" &&
            storyProgress.currentStep == 0
        ) {
            playRingSound();
        }

        if (
            storyProgress.currentLevel === 1 &&
            storyProgress.scenery === "s3" &&
            storyProgress.currentStep == 0
        ) {
            playDramaticSound();
        }
    }

    //Muestra o no el log
    const handleShowLog = () => {
        setLogVisible(!logVisible);
    };

    //Actualiza el log
    useEffect(() => {
        setLog(levels[storyProgress.currentLevel].log);
    }, [storyProgress.currentStep, storyProgress.currentLevel]);

    //Actualiza el escenario en el estado global
    useEffect(() => {
        updateStoryProgress({
            scenery: currentScenery,
        });
    }, []);

    return (
        <>
            {currentScenery === "intro-0" ? (
                <div
                    className="w-full h-[10%] flex bottom-4 justify-center fixed"
                    onClick={() => {
                        playSound();
                        window.location.href = "/intro-1";
                    }}
                >
                    {playIntroSound()}
                    <button className="text-lg bg-[#4cdef8] font-bold text-[#283a74] hover:bg-[#283a74] hover:text-white py-2 px-4 border-b-4 border-[#247685] hover:border-[#283a74] rounded-full w-[200px]">
                        Iniciar
                    </button>
                </div>
            ) : (
                <div
                    id="dialog-container"
                    className={`fixed max-h-[280px] max-w-full min-w-full bottom-10 flex justify-around`}
                >
                    <Dialogs
                        levels={levels}
                        log={log}
                        visible={logVisible}
                        handleShowLog={handleShowLog}
                    />
                    <div className={`hidden w-[15%] md:flex md:flex-col md:justify-around md:items-center`}>
                        <button
                            id='Continue Button'
                            onClick={() => {
                                playSound();
                                if (
                                    levels[storyProgress.currentLevel].showLog
                                ) {
                                    if (
                                        storyProgress.missionDone &&
                                        thereIsMission
                                    ) {
                                        setNextStep(); //puede continuar
                                    } else if (
                                        !storyProgress.missionDone &&
                                        thereIsMission
                                    ) {
                                        handleShowLog(); //abre el log
                                    }
                                } else if (!isPaused) {
                                    if(logVisible){
                                        handleShowLog(); //cierra el log si esta abierto
                                    }else{
                                        setNextStep(); //si no esta pausado sigue la historia
                                    }
                                }
                            }}
                            className={`hidden h-[70%] w-full text-lg font-bold text-[#283a74] md:text-[20px] lg:text-[28px] xl:text-[38px] py-2 px-4 rounded-t-2xl p-3 border-2 border-solid select-none md:block
							${
                                logVisible
                                    ? "h-full rounded-2xl "
                                    : ""
                            }
							${
                                isPaused
                                    ? "bg-[#765ff5] text-gray-300 border-[#765ff5]"
                                    : "bg-[#4cdef8] border-[#4cdef8]"
                            }`}
                        >
                            {logVisible
                                ? "Entendido"
                                : `${isPaused ? "Espera" : "Siguiente"}`}
                        </button>
                        <ButtonLog
                            handleShowLog={handleShowLog}
                            visible={logVisible}
                        />
                    </div>
                    <div className="md:hidden">
                        <ButtonLog
                            handleShowLog={handleShowLog}
                            visible={logVisible}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

function logIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
        </svg>
    );
}

const ButtonLog = ({ handleShowLog, visible = true }) => {
    return (
        <>
            <button
                onClick={handleShowLog}
                className={`${
                    visible ? "md:hidden" : "md:flex md:justify-center" 
                } fixed top-2 right-2 md:static  md:w-[100%] text-lg font-bold text-[#283a74] p-4 md:py-2 md:px-4 rounded-full md:rounded-none md:rounded-b-2xl  border-2 border-solid select-none bg-[#4cdef8] border-[#4cdef8] `}
            >
                {logIcon()}
            </button>
        </>
    );
};
