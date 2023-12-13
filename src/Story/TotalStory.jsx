import Abuela from "../World/Personajes/Abuela";
import Xander from "../World/Personajes/Xander";
import Raven from "../World/Personajes/Raven";

import Corredor from "../World/Scenerys/Corredor/Corredor";
import CuartoAbuela from "../World/Scenerys/CuartoAbuela/CuartoAbuela";
import CuartoPadres from "../World/Scenerys/CuartoPadres/CuartoPadres";
import Sotano from "../World/Scenerys/Sotano/Sotano";
import PrimerEscenario from "../World/MundoVirtual/PrimerEscenario/PrimerEscenario";
import SegundoEscenario from "../World/MundoVirtual/SegundoEscenario/SegundoEscenario";
import CuartoXander from "../World/Scenerys/CuartoXander/CuartoXander";
import Muerte from "../World/MundoVirtual/EscenarioMuerte/Muerte"
import Escoger from "../World/MundoVirtual/EscenarioEscoger/Escoger";
import { Ardilla } from "../World/Scenerys/CuartoPadres/tapaq/ardilla";

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
						lines:
							"Desde la muerte de mis padres no he sido el mismo, todo es un poco... vació.",
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
						lines: `...     
							
							




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
						lines:
							"Si mijo, ¿podrías venir a la cocina? pero organiza tu cuarto primero!.",
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
			<Ardilla key={3} position={[0, 1, -2]} scale={0.1} />,
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
				],
			},
			{
				showLog: true,
				log: "Antes de hacer el café ayuda a la abuela a recoger las cosas que está sobre la mesa de la sala. Hay una cámara de las antiguas en el sofá. Xander la dejó ahí en un descuido. Será mejor que la pongas sobre la mesa. da clic en los objetos desorganizados para poder continuar",
				dialogs: [
					{
						name: "Xander",
						lines: "Claro abuela, dame un momento.",
					},
					{
						name: "Xander (le entrega su cafe recién hecho)",
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
							" ¿Podrías organizar la casita? No has ordenado tu cuarto en años.",
					},
					{
						name: "Xander",
						lines: "Ash jajaja, Okay abuela, ya te ayudo con la casa.",
					},
					{
						name: "Evelyn",
						lines: `Revisa por favor mi habitación y
							


							el sótano también. Las cosas de tus padres están allí. Cogiendo polvo.`,
					},
					{
						name: "Evelyn",
						lines: `Voy a salir a comprar algo para el desayuno, no me demoro.`,
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
						name: "Xander(Preocupado)",
						lines: "¿Un trato? ¿Qué quieres?",
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
						name: "Desconocido (Ríe)",
						lines: "Desconfiar es un lujo que no te puedes permitir.",
					},
					{
						name: "Desconocido (Ríe)",
						lines:
							"Pero si valoras la vida de tu abuela, no te conviene desafiarme. Tienes  2 semanas para conseguir el dinero y seguir mis instrucciones. Si no lo haces, las consecuencias serán desastrosas.",
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
						name: "Desconocido (Antes de colgar)",
						lines: "Solo obedece...",
					},
					{
						name: "Xander",
						lines: "No es posible, seguro es una broma.",
					},
					{
						name: "Xander",
						lines:
							"No creo que sea cierto. No es posible acceder a un VOG de manera remota... ¿O sí?",
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
		nextScenery: "intro-8",
		thereIsMission: false,
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `No me gusta estar acá abajo, cada vez que vengo recuerdo a mis padres. Me da tristeza saber que lo único que me queda es eso. 
						

						



						Un simple recuerdo.`,
					},
					{
						name: "Xander",
						lines: `Pero si no quiero perder a mi abuela....`,
					},
					{
						name: "Xander",
						lines: `tengo que encontrar los artefactos que usaba ella.`,
					},
				],
			},
			{
				log: `Que harías tu si fueras Xander?`,
				dialogs: [
					{
						name: "Xander (Buscando)",
						lines: `No lo veo por ningún lado... recuerdo que era parecido a unas gafas.`,
					},
					{
						name: "Xander (Buscando)",
						lines: `No... 
						
						
						
						
						Aquí no.`,
					},
				],
			},
			{
				log: `Que harías tu si fueras Xander?`,
				dialogs: [
					{
						name: "Xander (Buscando desesperadamente)",
						lines: `¿¡Donde esta!?`,
					},
					{
						name: "Xander (Buscando desesperadamente)",
						lines: `Solo me estoy deprimiendo en este lugar con tantos recuerdos...`,
					},
				],
			},
			{
				log: `Que harías tu si fueras Xander?`,
				dialogs: [
					{
						name: "Xander",
						lines: `Aquí esta... 
						
						









						
						si que tiene polvo, pero enciende.`,
					},
					{
						name: "Xander",
						lines: `Discúlpame Abuela...`,
					},
				],
			},
		],
	},
	s5: {
		camera: { position: [8, 8, 5] },
		component: <Escoger />,
		characters: [<Xander key={1} position={[-2, 20, 0]} />],
		currentScenery: "s5",
		nextScenery: "tapaq",
		thereIsMission: true,
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander (Aparece y Cae)",
						lines: `Auch.`,
					},
					{
						name: "Xander",
						lines: `¿Donde estoy?... ¿en el Mundo Virtual?.`,
					},
					{
						name: "Xander",
						lines: `Ya podrían programarlo mejor, caer de los cielos no es una buena invitación.`,
					},
					{
						name: "Xander",
						lines: `Pero admito que mi puerta atrás mio esta bien programado, es similar a mi casa. sera la salida?`,
					},
					{
						name: "Xander",
						lines: `¿Y eso de enfrente es la entrada al VM?.`,
					},
					{
						name: "Xander",
						lines: `Es muy diferente a lo que pense que era...`,
					},
				],
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander (Dudoso)",
						lines: `Si entro al mundo virtual, no creo poder volver aunque quiera, por amor a mi abuela.`,
					},
					{
						name: "Xander (Dudoso)",
						lines: `Aunque no sé, si al cruzar esa puerta, este la solución para salvarla a ella.`,
					},
					{
						name: "Xander (Dudoso)",
						lines: `Pero si me devuelvo podre mirar otras maneras en el mundo real.`,
					},
				],
			},
			{
				log: "¡Xander Debe tomar una decisión para salvar a su abuela! volver al mundo y arreglar las cosas en el mundo que conoce, o aventurarse al Mundo Virtual, sin saber que si haya encontrará la manera de salvar a su abuela. Elige dando clic en la decisión que tomes.",
				showLog: true,
				dialogs: [
					{
						name: "Xander (Dudoso)",
						lines: `¿Que debo hacer?`,
					},
				],
			},
		],
	},
	s6: {
		camera: { position: [8, 8, 5] },
		component: <Muerte />,
		characters: [
			<Xander key={1} position={[0.2, 1, 0]} scale={1.2} />,
		],
		currentScenery: "s6",
		nextScenery: "intro-9",
		thereIsMission: false,
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `Vale, he vuelto, creo que ya han pasado... 
						
						4 semanas, ese mundo se veía demasiado imponente para mi.`,
					},
					{
						name: "Xander",
						lines: `No creo haber encontrado nada ahi para ayudar a mi abuela.`,
					},
					{
						name: "Xander",
						lines: `... Ahora tengo que idear una manera diferente para salvarla...`,
					},
				]
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `O quizás mañana.`,
					},
					{
						name: "Xander (Mientras el celular suena)",
						lines: `Solo tengo que... *Ring *Ring`,
					},
					{
						name: "Xander (Revisa el celular)",
						lines: `...`,
					},
					{
						name: "Xander (Revisa el celular)",
						lines: `No, aun es muy pronto...`,
					},
					{
						name: "Xander (Revisa el celular)",
						lines: `...`,
					}
				]
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander (Contesta)",
						lines: `Por favor no le hagas daño...`,
					},
					{
						name: "Xander",
						lines: `No tengo manera de detenerte... 
						
						pero.`,
					},
					{
						name: "Xander (Contesta)",
						lines: `Solo no lo hagas... 
						
						
						
						por favor...`,
					},
					{
						name: "Xander",
						lines: `No me has dado tiempo...`,
					},
					{
						name: "Desconocido",
						lines: `...`,
					}
				],
			},
		],
	},
	s7: {
		camera: { position: [-5, 8, 8] },
		component: <PrimerEscenario />,
		characters: [
			<Xander key={1} position={[-11, 1, 0]} />,
		],
		currentScenery: "s7",
		nextScenery: "s8",
		thereIsMission: true,
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `Bueno... ya tome la decisión.`,
					},
					{
						name: "Xander",
						lines: `Todo para salvar a mi abuelita.`,
					},
					{
						name: "Xander",
						lines: `Espero no sea en vano.`,
					},
				],
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `¿Que tenemos aquí?, ¿Un camino sin salida?.`,
					},
					{
						name: "Xander (Desanimado)",
						lines: `No pense que mi visita en este mundo fuera tan corta.`,
					},
				],
			},
			{
				log: "No todo es lo que parece... Toca los cubos para poder avanzar.",
				showLog: true,
				dialogs: [
					{
						name: "Xander",
						lines: `A menos que...`,
					},
					{
						name: "Xander",
						lines: `Como lo suponía, este mundo no funciona igual.`,
					},

				],
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `Y seguramente este muro tampoco tiene colisiones.`,
					},
					{
						name: "Xander",
						lines: `Eso fue fácil.`,
					},
					{
						name: "Desconocido",
						lines: `*Sonidos de pasos desvanecerse.`,
					},
					{
						name: "Xander (asustado)",
						lines: `Creo haber escuchado algo...`,
					},
					{
						name: "Xander (asustado)",
						lines: `Bueno... 
						
						
						
						
						no importa.`,
					},
					{
						name: "Xander (asustado)",
						lines: `Entre mas rápido nos vayamos de aca, mucho mejor, creo que es por aquí.`,
					},
				],
			},
		],
	},
	s8: {
		camera: { position: [5, 8, 5] },
		component: <SegundoEscenario />,
		characters: [
			<Xander key={1} position={[-4, 1, 0]} />,
			<Raven key={2} position={[6, 1, 0]} />,
		],
		currentScenery: "s8",
		nextScenery: "tapaq",
		thereIsMission: false,
		levels: [
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `...`,
					},
				]
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander",
						lines: `El mundo virtual es mas grande de lo que parece.`,
					},
					{
						name: "Xander",
						lines: `He caminado por mas de 30 mins, pero no veo nada que me pueda ayudar.`,
					},
				]
			},
			{
				log: "",
				dialogs: [
					{
						name: "Xander (Sorprendido)",
						lines: `¡Oh mira!, un robot tendero. hoy en dia son 5 veces mas pequeños.`,
					},
					{
						name: "Xander",
						lines: `Como evoluciona la tecnología.`,
					},
					{
						name: "Xander",
						lines: `Codigo 538....6, dame un dulce kuchi sin chispas de chocolate.`,
					},
					{
						name: "Codigo 5386",
						lines: `¿Bip bup?.`,
					},
				]
			},
			{
				logs: "",
				dialogs: [
					{
						name: "Xander",
						lines: `Creo que no me entiende...`,
					},
					{
						name: "Xander",
						lines: `Se me olvida que es una version vieja, seguramente funcione diferente.`,
					},
				]
			},
			{
				logs: "",
				dialogs: [
					{
						name: "Xander (Se empujan sin querer)",
						lines: `¡Hey... que te pasa!.`,
					},
					{
						name: "Xander",
						lines: `¿No ves por donde andas?`,
					},
					{
						name: "Desconocida",
						lines: `Perdona, no vi por donde iba.`,
					},
					{
						name: "Xander",
						lines: `Umm....
						
						
						Esta bien no hay problema
						`,
					},
				]
			},
			{
				logs: '',
				dialogs:[
					{
						name: "Desconocida (Se va)",
						lines: `...`,
					},
					{
						name: "Xander",
						lines: `Bueno en lo que iba.`,
					},
					{
						name: "Xander (Saca la Billetera Virtual)",
						lines: `Código 5386. dame: kuchi, pago:Diner...`,
					},
					{
						name: "Xander",
						lines: `Y ...
						
						
						¿mi billetera?.`,
					},
					{
						name: "Xander (Pánico Leve)",
						lines: `Ya no esta.`,
					},
					{
						name: "Xander",
						lines: `...
						
						
						No dure ni 1 hora sin que me pasara algo...`,
					},
				]
			},
			{
				logs:'',
				dialogs:[
					{
						name: "Xander",
						lines: `...`,
					},
					{
						name: "Xander",
						lines: `¡No importa!.`,
					},
					{
						name: "Xander",
						lines: `Seguiré por mi abuela`,
					},

				]
			}
		],
	},
tapaq: {
	camera: { position: [1, 3, 6] },
	component: <CuartoPadres />,
		characters: [<Xander position={[-5, 5, 11.3]} scale={0.2} />],
			currentScenery: "tapaq",
				nextScenery: "s2",
					thereIsMission: false,
						levels: [
							{
								log: "",
								dialogs: [
									{
										name: "Juego",
										lines: `Bienvenido. 
						
						Te presento a los creadores`,
									},
								],
							},
						],
	},
};

export default Story;
