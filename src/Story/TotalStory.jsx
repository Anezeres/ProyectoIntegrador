import Abuela from "../World/Personajes/Abuela";
import Xander from "../World/Personajes/Xander";
import Raven from "../World/Personajes/Raven";

import Corredor from "../World/Scenerys/Corredor/Corredor";
import CuartoAbuela from "../World/Scenerys/CuartoAbuela/CuartoAbuela";
import CuartoPadres from "../World/Scenerys/CuartoPadres/CuartoPadres";
import Sotano from "../World/Scenerys/Sotano/Sotano";
import PrimerEscenario from "../World/MundoVirtual/PrimerEscenario/PrimerEscenario";
import CuartoXander from "../World/Scenerys/CuartoXander/CuartoXander";
import SegundoEscenario from "../World/MundoVirtual/SegundoEscenario/SegundoEscenario";

const genericLog = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Qu	ibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem
		quidem		quod		quibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem
		quidem		quod		quibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem
		quidem		quod		quibusdam, voluptatum, voluptatem, quos quae voluptas quia	autem`;

const Story = {
	s1: {
		camera: { position: [-1, 4, 0] },
		component: <CuartoXander />,
		characters: [<Xander key={1} position={[-18, 1, -10.5]} />],
		currentScenery: "s1",
		nextScenery: "s2",
		thereIsMission: true,
		levels: [
			{
				log: "",
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
						lines: "Desde la muerte de mis padres no he sido el mismo, todo es un poco... vació.",
					},
					{
						name: "Xander",
						lines:
							"Por suerte tengo a mi abuela Evelyn, siempre me ha cuidado... Yo... La quiero mucho.",
					},
				],
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander (Despierta)",
						lines:
							`...     
							
							




							¿Qué horas son?`,
					},
					{
						name: "Xander",
						lines:
							" Bien… Son las 6:30 am, es bastante temprano la verdad. ¿Quién se despierta a estas horas hoy en día? ",
					},
					{
						name: "Evelyn (A través del intercomunicador)",
						lines: "¿Xander!!! Estás despierto mijo? ",
					},
					{
						name: "Xander",
						lines: `Por supuesto, Solo las abuelas están despiertas a estas horas. 









                        Sí abuela, ya desperté, ¿te puedo ayudar en algo? `,
					},
					{
						name: "Evelyn",
						lines: "Si mijo, ¿podrías venir a la cocina? pero organiza tu cuarto primero!.",
					},
				],
			},
			{
				log: "Xander duerme en su propia habitación que el mismo personalizó. Pero está un poco desordenada. Da clic en los objetos del suelo, las botellas de gaseosa y demás cosas que veas en desorden para poder continuar.",
				showLog: true,
				dialogs: [
					{
						name: "Xander",
						lines: "Vale, ya voy.",
					},
				],
			},
			{
				log: "",
				dialogs: [
					{
						name: "Evelyn",
						lines: "¡Gracias!",
					},
				],
			},
		],
	},
	s2: {
		camera: { position: [-1, 4, 4] },
		component: <Corredor />,
		characters: [
			<Xander key={1} position={[-7, 1, -3.2]} scale={1.1} />,
			<Abuela key={2} position={[6, 1, -7]} scale={1} />,
		],
		currentScenery: "s2",
		nextScenery: "s3",
		thereIsMission: true,
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: "Buenos días Abuela, Ya estoy, ¿en qué puedo ayudarte?",
					},
					{
						name: "Evelyn",
						lines: `Buenos días cariño ¿Podrías ayudarme a preparar el café?`,
					},
					{
						name: "Evelyn",
						lines: `Desde que tuve la operación en el corazón me he sentido un poco cansada.`,
					},
					{
						name: "Xander",
						lines: "Claro abuela, dame un momento.",
					},
				],
			},
			{
				showLog: true,
				log: "Antes de hacer el café ayuda a la abuela a recoger las cosas que está sobre la mesa de la sala. Hay una cámara de las antiguas en el sofá. Xander la dejó ahí en un descuido. Será mejor que la pongas sobre la mesa. da clic en los objetos desorganizados para poder continuar",
				dialogs: [
					{
						name: "Xander (*le entrega su cafe recién hecho)",
						lines: "Listo abuela, aquí está, espero te guste.",
					},
					{
						name: "Evelyn",
						lines: `Gracias cariño.






						Bueno… está bien, prefiero hacerlo a la antigua, las cafeteras de hoy solo les quitan el sabor.
						`,
					},
					{
						name: "Xander",
						lines: "Jajaja, siempre dices lo mismo abuela.",
					},
					{
						name: "Evelyn",
						lines: "¿Me puedes ayudar con otra cosita?",
					},
					{
						name: "Xander",
						lines: "Sí, claro abuela.",
					},
					{
						name: "Evelyn",
						lines:
							"¿Podrías organizar la casita? No has ordenado tu cuarto en años. Desde que acabó la guerra de Ucrania.",
					},
					{
						name: "Xander",
						lines: "Ash jajaja, Okay abuela, ya te ayudo con la casa.",
					},
					{
						name: "Evelyn",
						lines:
							`Revisa por favor mi habitación y
							


							el sótano también. Las cosas de tus padres están allí. Cogiendo polvo.`,
					},
					{
						name: "Evelyn",
						lines:
							`Voy a salir a comprar algo para el desayuno, no me demoro.`,
					},
					{
						name: "Xander",
						lines: "Bueno, abuela. Voy a acomodar tu habitación.",
					},
				],
			},
		],
	},
	s3: {
		camera: { position: [1, 3, 6] },
		component: <CuartoAbuela />,
		characters: [<Xander position={[9, 0.5, 5]} scale={1} />],
		currentScenery: "s3",
		nextScenery: "intro-6",
		thereIsMission: false,
		levels: [
			{
				log: `Xander tiene un dispositivo en su chaqueta que le permite comunicarse de manera instantánea. Un SynthiCom modelo 2048, todos tienen uno de estos hoy en día. Estos dispositivos pusieron de moda el llamar las personas. Los chats instantaneos y los mensajes de audio quedaron a un lado.
				
				VOG es la abreviación coloquial de Virtual Organs.
				`,
				dialogs: [
					{
						name: "Xander",
						lines: `Mi abuela es muy organizada, aquí no hay nada que limpiar.`,
					},
				],
			},
			{
				log: `Xander tiene un dispositivo en su chaqueta que le permite comunicarse de manera instantánea. Un SynthiCom modelo 2048, todos tienen uno de estos hoy en día. Estos dispositivos pusieron de moda el llamar las personas. Los chats instantaneos y los mensajes de audio quedaron a un lado.
				
				VOG es la abreviación coloquial de Virtual Organs.
				`,
				dialogs: [
					{
						name: "Xander (mientras suena el Celular)",
						lines: `Qué extraño sonido. 
						
						Es el celular de mi abuela, debería usar un SynthiCom. Bueno, voy a contestar.`,
					},
				],
			},
			{
				log: `Xander tiene un dispositivo en su chaqueta que le permite comunicarse de manera instantánea. Un SynthiCom modelo 2048, todos tienen uno de estos hoy en día. Estos dispositivos pusieron de moda el llamar las personas. Los chats instantaneos y los mensajes de audio quedaron a un lado.
				
				VOG es la abreviación coloquial de Virtual Organs.
				`,
				dialogs: [
					{
						name: "Desconocido",
						lines: "Evelyn… Al fin respondes mis llamadas.",
					},
					{
						name: "Xander",
						lines: "Habla Xander… ¿Quién eres? ¿Qué es lo que quieres?",
					},
					{
						name: "Desconocido",
						lines:
							"No es quién soy lo que importa, sino lo que poseo. Tengo algo valioso que podría cambiar tu vida y la de tu querida abuela.",
					},
					{
						name: "Xander",
						lines: "¿De qué estás hablando? ¿Qué tienes?",
					},
					{
						name: "Desconocido",
						lines:
							"Tengo un código, Xander, un código que podría salvar o arruinar tu existencia.Tengo la llave del Virtual Organs de tu abuela. Pero no te preocupes, estoy dispuesto a hacer un trato contigo.",
					},
					{
						name: "Xander",
						lines: "(Preocupado) ¿Un trato? ¿Qué quieres?",
					},
					{
						name: "Desconocido",
						lines:
							"Sencillo. Dinero. Una buena suma de bitcoins, para ser precisos. Envíame la cantidad que te diré y te daré el código que necesitas. No hagas preguntas, solo obedece.",
					},
					{
						name: "Xander",
						lines:
							"Pero... ¿por qué debería confiar en ti? ¿Cómo sé que cumplirás tu parte del trato?",
					},
					{
						name: "Desconocido",
						lines: "(Ríe) Desconfiar es un lujo que no te puedes permitir.",
					},
					{
						name: "Desconocido",
						lines:
							"(Ríe) Pero si valoras la vida de tu abuela, no te conviene desafiarme. Tienes  2 semanas para conseguir el dinero y seguir mis instrucciones. Si no lo haces, las consecuencias serán desastrosas.",
					},
					{
						name: "Xander",
						lines: "¿Cómo sé que ella está a salvo?",
					},
					{
						name: "Desconocido",
						lines:
							"Esa es la gracia, no lo sabrás hasta que completes la transacción. No intentes rastrearme, créeme en el mundo virtual yo soy tu peor pesadilla. No intentes ser más inteligente. Solo haz lo que se te ordena.",
					},
					{
						name: "Desconocido",
						lines: "La vida de tu abuela está en juego.",
					},
					{
						name: "Xander",
						lines: "¿Qué? ¿eres un hacker?",
					},
					{
						name: "Xander",
						lines: "¿Cómo conseguiste el acceso al VOG de mi abuela?",
					},
					{
						name: "Desconocido (antes de colgar)",
						lines: "Solo obedece...",
					},
					{
						name: "Xander",
						lines:
							"No es posible, seguro es una broma. Voy a investigar un poco. No creo que sea cierto. No es posible acceder a un VOG de manera remota ¿O sí?",
					},
				],
			},
		],
	},
	s4: {
		camera: { position: [1, 3, 6] },
		component: <Sotano />,
		characters: [<Xander position={[0, 0, 0]} scale={1.2} />],
		currentScenery: "s4",
		nextScenery: "intro-9",
		thereIsMission: false,
		levels: [
			{
				log: genericLog,
				dialogs: [
					{
						name: "Xander",
						lines: `No me gusta estar acá abajo, cada vez que vengo recuerdo a mis padres. Me da tristeza saber que lo único que me queda es eso. 
						

						
						Un simple recuerdo.`,
					},
				],
			},
		],
	},
	s5: {
		camera: { position: [-5, 8, 8] },
		component: <PrimerEscenario />,
		characters: [
			<Xander key={1} position={[-4, 1, 0]} />,
			<Raven key={2} position={[6, 1, 0]} />,
		],
		currentScenery: "s5",
		nextScenery: "s6",
		thereIsMission: false,
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
	s6: {
		camera: { position: [5, 8, 5] },
		component: <SegundoEscenario />,
		characters: [
			<Xander key={1} position={[-4, 1, 0]} />,
			<Raven key={2} position={[6, 1, 0]} />,
		],
		currentScenery: "s6",
		nextScenery: "tapaq",
		thereIsMission: false,
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
		camera: { position: [1, 3, 6] },
		component: <CuartoPadres />,
		characters: [<Xander position={[0, 0, 0]} scale={1.5} />],
		currentScenery: "tapaq",
		nextScenery: "s1",
		thereIsMission: false,
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
