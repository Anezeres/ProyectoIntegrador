import "./intro.css";
import React, { useEffect, Suspense } from "react";

import { Audio, AudioListener, AudioLoader } from "three";

export function Intro({ imageId }) {
    useEffect(() => {
        sonidoDeFondo();
        return () => {
            sound.stop();
        };
    }, []);
    let sound = {};
    const sonidoDeFondo = () => {
        const listener = new AudioListener();

        // Crear una fuente de audio global
        sound = new Audio(listener);

        // Cargar un sonido y configurarlo como el buffer del objeto de audio
        const audioLoader = new AudioLoader();
        audioLoader.load("/assets/sounds/ambient.mp3", (buffer) => {
            sound.setBuffer(buffer);

            sound.setVolume(0.3);
            sound.play();
        });
        sound.setLoop(true);
    };

    return (
        <div
			id="image-container" 
			className="w-full h-full flex justify-center">
            <img
				className="h-[45%] max-w-[80%] mt-6 rounded-[15px] border-solid border-2 border-[#4d205a] shadow-custom transition transform hover:scale-[1.05]" 
				src={`./images/${imageId}.jpg`} 
				alt="Imagen de la historia" />
        </div>
    );
}

export const Video = () => {
    return (
        <div className="bg-white">
            <Suspense fallback={<div>Cargando...</div>}>
                <video
                    className="w-full h-screen"
                    preload="true"
                    autoPlay
                    src="assets/videos/intro.mp4"
					alt="Intro de la empresa"
                >
                    Tu navegador no soporta el elemento de video.
                </video>
            </Suspense>
        </div>
    );
};