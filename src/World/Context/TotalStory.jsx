import Abuela from "../Personajes/Abuela";
import Personajes from "../Personajes/Personajes";
import Xander from "../Personajes/Xander";
import SecondFloor from "../SecondFloor/SecondFloor";
import Sotano from "../Sotano/Sotano";

const Story = {
	s1: {
		camera: { position: [-1, 4, 7] },

		component: <SecondFloor />,
		characters: [<Personajes />],
		nextScenery: "s2",
		levels: [
			{
				log: "Abre la puerta y acercate a ella para salir de la habitación",
				dialogs: [
					{
						name: "Xander",
						lines:
							"Son las 4pm, tengo hambre, y no he podido comer nada desde el desayuno.\n¿Qué hay de comer?",
					},
					{
						name: "Abuela",
						lines: "Mijo! baje a comer sancocho.",
					},
					{
						name: "Xander",
						lines:
							"Oh no, no me gusta el sancocho, ¿Cómo podré librarme del sancocho?",
					},
				],
			},
		],
	},
	s2: {
		camera: { position: [0, 3, 7] },
		component: <Sotano />,
		characters: [<Xander position={[0, 0, 0]} scale={1.5} />],
		nextScenery: "s2",
		levels: [
			{
				log: "Revisa con detalle toda la habitación.",
				dialogs: [
					{
						name: "Xander",
						lines: "Esto es un desastre. Algo de esto tal vez me ayude.",
					},
				],
			},
		],
	},
};

export default Story;
