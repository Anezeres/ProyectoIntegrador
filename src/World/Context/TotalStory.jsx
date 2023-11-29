import Abuela from "../Personajes/Abuela";
import Personajes from "../Personajes/Personajes";
import Xander from "../Personajes/Xander";
import Corredor from "../SecondFloor/Corredor/Corredor";
import CuartoAbuela from "../SecondFloor/CuartoAbuela/CuartoAbuela";
import CuartoPadres from "../SecondFloor/CuartoPadres/CuartoPadres";
import SecondFloor from "../SecondFloor/SecondFloor";
import Sotano from "../Sotano/Sotano";

const genericLog = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Qu	ibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem
		quidem		quod		quibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem
		quidem		quod		quibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem
		quidem		quod		quibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem`;

export const s1 = {
	camera: { position: [-1, 4, 0] },

	component: <SecondFloor />,
	characters: [<Personajes />],
	nextScenery: "s2",
	thereIsMission: true,

	levels: [
		{
			log: "Xander duerme en su propia habitación que el mismo personalizó. Pero está un poco desordenada. Da clic en los objetos del suelo, las botellas de gaseosa y demás cosas que veas en desorden.",
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
					lines: "Si mijo, ¿podrías venir a la cocina?",
				},
			],
		},
		{
			showLog: true,
			log: "Xander duerme en su propia habitación que el mismo personalizó. Pero está un poco desordenada. Da clic en los objetos del suelo, las botellas de gaseosa y demás cosas que veas en desorden.",
			dialogs: [
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
		thereIsMission: true,
		component: <Corredor />,
		characters: [
			<Xander key={1} position={[1, 0.3, 1]} scale={1.4} />,
			<Abuela key={2} position={[6, 0.2, -7]} scale={1.4} />,
		],
		nextScenery: "s3",
		levels: [
			{
				log: "Ayuda a la abuela a recoger las cosas que está sobre la mesa de la sala. Hay una cámara de las antiguas en el suelo del pasillo. Xander la dejó ahí en un descuido. Será mejor que la pongas sobre la mesa.",
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
				showLog: true,
				log: "Ayuda a la abuela a recoger las cosas que está sobre la mesa de la sala. Hay una cámara de las antiguas en el suelo del pasillo. Xander la dejó ahí en un descuido. Será mejor que la pongas sobre la mesa.",
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
		thereIsMission: false,

		camera: { position: [1, 3, 6] },
		component: <CuartoAbuela />,
		characters: [<Xander position={[0, 0, 0]} scale={1.5} />],
		nextScenery: "s4",
		levels: [
			{
				log: genericLog,
				dialogs: [
					{
						name: "Xander",
						lines: `Mi abuela es muy organizada, aquí no hay nada que limpiar. 
						
						Mejor busco algo para ayudar a mi abuela.`,
					},
				],
			},
		],
	},
	s4: {
		thereIsMission: false,

		camera: { position: [1, 3, 6] },
		component: <Sotano />,
		characters: [<Xander position={[0, 0, 0]} scale={1.5} />],
		nextScenery: "tapaq",
		levels: [
			{
				log: genericLog,
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
	tapaq: {
		thereIsMission: false,

		camera: { position: [1, 3, 6] },
		component: <CuartoPadres />,
		characters: [<Xander position={[0, 0, 0]} scale={1.5} />],
		nextScenery: "s2",
		levels: [
			{
				log: genericLog,
				dialogs: [
					{
						name: "Juan David",
						lines: `Bienvenido. 
						
						Te presento a los creadores`,
					},
				],
			},
		],
	},
};

export default Story;
