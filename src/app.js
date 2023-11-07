import Dialogs from "./Components/Dialogs";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import RefContext, { StoryContext } from "./World/Context/RefContext.jsx";
import SecondFloor from "./World/SecondFloor/SecondFloor.jsx";
import Sotano from "./World/Sotano/Sotano.jsx";
import { RigidBody } from "@react-three/rapier";
import Xander from "./World/Personajes/Xander.jsx";
import Personajes from "./World/Personajes/Personajes.jsx";
import Abuela from "./World/Personajes/Abuela.jsx";
const Story = {
	s1: {
		component: <SecondFloor />,
		characters: [<Personajes />],
	},
	s2: {
		component: <Sotano />,
		characters: [
			<Xander position={[0, 0, 0]} scale={1.5} />,
			<Abuela position={[0, -30, 0]} />,
		],
	},
};

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/s1">
						<div id="canvas-container">
							<Canvas camera={{ position: [-1, 4, 7] }}>
								<Experience>
									<RigidBody type="fixed">
										<SecondFloor />
									</RigidBody>
									{Story.s1.characters[0]}
								</Experience>
							</Canvas>
							<StoryContext>
								<Scenery />
							</StoryContext>
							{/* elementos que no tienen 3D */}
						</div>
					</Route>
					<Route path="/s2">
						<Canvas camera={{ position: [-1, 4, 7] }}>
							<StoryContext>
								<Experience>
									{Story.s2.component}
									{Story.s2.characters[0]}
								</Experience>
							</StoryContext>
						</Canvas>
					</Route>
					<Route path="/">
						<Landing />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
