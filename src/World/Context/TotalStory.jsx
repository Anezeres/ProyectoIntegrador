import Abuela from "../Personajes/Abuela";
import Personajes from "../Personajes/Personajes";
import Xander from "../Personajes/Xander";
import Corredor from "../SecondFloor/Corredor/Corredor";
import SecondFloor from "../SecondFloor/SecondFloor";
import Sotano from "../Sotano/Sotano";
export const s1 = {
	camera: { position: [-1, 4, 0] },

	component: <SecondFloor />,
	characters: [<Personajes />],
	nextScenery: "s2",
	levels: [
		{
			log: "Xander duerme en su propia habitación que el mismo personalizó.",
			dialogs: [
				{
					name: "Xander",
					lines: `Me pregunto si la tecnología que nos rodea nos ha acercado o alejado de la humanidad. `,
				},
				{
					name: "Xander",
					lines:
						"A veces, me siento como un espectador en lugar de un participante en la vida real.",
				},
				{
					name: "Xander",
					lines:
						"Desde la muerte de mis padres no he sido el mismo, todo es un poco... vacio.",
				},
				{
					name: "Xander",
					lines:
						"Por suerte tengo a mi abuela Evelyn, siempre me ha cuidado... Yo... La quiero mucho.",
				},
				{
					name: "Xander (Despierta)",
					lines:
						" Bien… Son las 6:30 am, es bastante temprano la verdad. ¿Quién se despierta a estas horas hoy en día? ",
				},
				{
					name: "Evelyn (A través del intercomunicador)",
					lines: "¿Xander!!! Está despierto mijo? ",
				},
				{
					name: "Xander",
					lines: `Por supuesto, Solo las abuelas están despiertas a estas horas. 
                        Sí abuela, ya desperté, ¿te puedo ayudar en algo? `,
				},
				{
					name: "Evelyn",
					lines: "Si mijo, ¿podrías venir a la cocina",
				},
				{
					name: "Xander",
					lines: "Vale, ya voy.",
				},
				{
					name: "Evelyn",
					lines: "¡Gracias! ",
				},
			],
		},
	],
};
const Story = {
	s2: {
		camera: { position: [-1, 4, 4] },
		component: <Corredor />,
		characters: [
			<Xander position={[-3, 0.2, 0]} scale={1.4} />,
			<Abuela position={[6, 0.2, -7]} scale={1.4} />,
		],
		nextScenery: "s3",
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: " Ya estoy abuela, ¿en qué puedo ayudarte?",
					},
					{
						name: "Evelyn",
						lines: ` Gracias por venir, ¿Podrías ayudarme a preparar el café? Desde que tuve la operación en el corazón me he sentido un poco cansada.`,
					},
					{
						name: "Xander",
						lines: "Claro abuela, dame un momento.",
					},
				],
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: "Listo abuela, aquí está, espero te guste.",
					},
					{
						name: "Evelyn",
						lines: `Gracias mijo.
						Bueno… está bien, prefiero hacerlo a la antigua, las cafeteras de hoy solo les quitan el sabor.
						`,
					},
					{
						name: "Xander",
						lines: "Jajaja, siempre dices lo mismo abuela.",
					},
					{
						name: "Xander",
						lines: "Sí, claro abuela",
					},
					{
						name: "Evelyn",
						lines:
							" ¿Podrías organizar la casita? No has ordenado tu cuarto en años. Desde que acabó la guerra de Ucrania.",
					},
					{
						name: "Xander",
						lines: "Ash jajaja, Okay abuela, ya te ayudo con la casa.",
					},
					{
						name: "Evelyn",
						lines:
							"Puedes revisar el sótano. Las cosas de tus padres están allí. Cogiendo polvo.",
					},
				],
			},
		],
	},
	s3: {
		camera: { position: [1, 3, 6] },
		component: <Sotano />,
		characters: [<Xander position={[0, 0, 0]} scale={1.5} />],
		nextScenery: "s1",
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `No me gusta estar acá abajo, cada vez que vengo recuerdo a mis padres. Me da tristeza saber que lo unico que me queda es eso. 
						
						Un simple recuerdo.`,
					},
				],
			},
		],
	},
};

export default Story;
