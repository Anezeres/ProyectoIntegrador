import "./intro.css";

export default function Intro({ imageId }) {
	return (
		<div className="App">
			<div className="image-container">
				hola
				<div className="image-row">
					<img src={`./images/0${imageId}.jpg`} alt="Image 01" />
				</div>
			</div>
		</div>
	);
}

import React, { useRef, useEffect, Suspense } from "react";

const Video = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		// Acciones a realizar cuando el componente se monta (se renderiza)
		// En este caso, reproducimos el video a pantalla completa

		const playVideo = async () => {
			try {
				// await videoRef.current.requestFullscreen();
				await videoRef.current.play();
			} catch (error) {
				console.error("Error reproduciendo el video:", error);
			}
		};

		playVideo();

		// Limpieza cuando el componente se desmonta
		// return () => {
		// 	if (document.fullscreenElement) {
		// 		document.exitFullscreen();
		// 	}
		// };
	}, []);

	return (
		<>
			<Suspense fallback={<div>Cargando...</div>}>
				<video
					className="w-full h-full"
					ref={videoRef}
					autoPlay
					muted
					playsInline
				>
					<source src="assets/videos/intro.mp4" type="video/mp4" />
					Tu navegador no soporta el elemento de video.
				</video>
				<a href="/intro-1">
					<button className="text-lg bg-[#4cdef8] font-bold text-[#283a74] py-2 px-4 rounded next-line-btn m-7 p-3 fixed bottom-1 left-[40%]  w-[200px]">
						Iniciar
					</button>
				</a>
			</Suspense>
		</>
	);
};

export const introState = [
	{
		camera: { position: [-1, 4, 0] },

		component: <Video />,
		characters: [""],
		nextScenery: "intro-1",
		levels: [
			{
				log: "Dale clic en siguiente para continuar con la historia",
				dialogs: [
					{
						name: "Xander (Sueña)",
						lines: `Una enfermedad devastadora atacó a mis padres. Recuerdo claramente el día en que mi abuela Evelyn tomó la valiente decisión de contármelo. Mis lágrimas no cesaron durante días.`,
					},
				],
			},
		],
	},
	{
		camera: { position: [-1, 4, 0] },
		component: <Intro imageId={1} />,
		characters: [""],
		nextScenery: "intro-2",
		levels: [
			{
				log: "Dale clic en siguiente para continuar con la historia",
				dialogs: [
					{
						name: "Xander (Sueña)",
						lines: `Mi vida no ha sido la misma desde hace 5 años, solíamos ser una familia feliz, yo solía ser feliz…`,
					},
					{
						name: "Xander (Sueña)",
						lines:
							"Pero la vida es efímera, el mundo es inconstante, nada perdura... Todo puede cambiar en un abrir y cerrar de ojos.",
					},
					{
						name: "Xander (Sueña)",
						lines:
							"Aeron, mi padre, y Seraphine, mi madre, compartían un amor que parecía indestructible, hasta el final de sus días",
					},
					{
						name: "Xander (Sueña)",
						lines:
							"Sin embargo, las tormentas suelen aparecer cuando menos las esperamos.",
					},
				],
			},
		],
	},
	{
		camera: { position: [-1, 4, 0] },

		component: <Intro imageId={2} />,
		characters: [""],
		nextScenery: "intro-3",
		levels: [
			{
				log: "Dale clic en siguiente para continuar con la historia",
				dialogs: [
					{
						name: "Xander (Sueña)",
						lines: `Una enfermedad devastadora atacó a mis padres. Recuerdo claramente el día en que mi abuela Evelyn tomó la valiente decisión de contármelo. Mis lágrimas no cesaron durante días.`,
					},
				],
			},
		],
	},
	{
		camera: { position: [-1, 4, 0] },

		component: <Intro imageId={3} />,
		characters: [""],
		nextScenery: "intro-4",
		levels: [
			{
				log: "Dale clic en siguiente para continuar con la historia",
				dialogs: [
					{
						name: "Xander (Sueña)",
						lines: `Mis padres decidieron usar sus ahorros de toda una vida en los novedosos Virtual Organs, buscando prolongar sus vidas 10 años más, para no abandonarme.`,
					},
					{
						name: "Xander (Sueña)",
						lines:
							"La corrupción gubernamental es despiadada; venden los Virtual Organs sin seguro, priorizando sus ganancias por encima de la seguridad.",
					},
				],
			},
		],
	},
	{
		camera: { position: [-1, 4, 0] },

		component: <Intro imageId={4} />,
		characters: [""],
		nextScenery: "intro-5",
		levels: [
			{
				log: "Dale clic en siguiente para continuar con la historia",
				dialogs: [
					{
						name: "Xander (Sueña)",
						lines: `Un malvado hacker interrumpió el latir de sus corazones, exigiendo tres millones de dólares a cambio de devolverles la vida.`,
					},
				],
			},
		],
	},
	{
		camera: { position: [-1, 4, 0] },

		component: <Intro imageId={5} />,
		characters: [""],
		nextScenery: "s1",
		levels: [
			{
				log: "Dale clic en siguiente para continuar con la historia",
				dialogs: [
					{
						name: "Xander",
						lines: `No lo lograron...`,
					},
				],
			},
		],
	},
];
