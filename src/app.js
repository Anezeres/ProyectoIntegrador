import Dialogs from "./Components/Dialogs";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import SecondFloor from "./World/SecondFloor/SecondFloor.jsx";
import Sotano from "./World/Sotano/Sotano.jsx";
import { RigidBody } from "@react-three/rapier";
import Xander from "./World/Personajes/Xander.jsx";
import Personajes from "./World/Personajes/Personajes.jsx";
import Abuela from "./World/Personajes/Abuela.jsx";
import Story, { s1 } from "./World/Context/TotalStory.jsx";
import { Loader } from "@react-three/drei";
import CharacterContext from "./World/Context/CharacterContext.jsx";
import RefContext from "./World/Context/RefContext.jsx";

export default function App() {

	return (
		<>
			<Router>
				<Switch>
					<Route path="/s1">
						<div id="canvas-container">
							<RefContext>
								<Canvas camera={{ position: [-1, 4, 2] }}>
									<Experience>
										<SecondFloor />

										{s1.characters[0]}
									</Experience>
								</Canvas>
								<Loader />
								<Scenery story={Story} levels={s1.levels} nextScenery="s2"/>
							</RefContext>
						</div>
					</Route>
					{/* <Route path="/s2">
						<Canvas camera={Story.s2.camera}>
							<Experience>
								{Story.s2.component}
								{Story.s2.characters.map((character) => character)}
							</Experience>
						</Canvas>
						<StoryContext>
							<Scenery
								story={Story}
								levels={Story.s2.levels}
								nextScenery={Story.s2.nextScenery}
							/>
						</StoryContext>
					</Route> */}

					{Object.keys(Story).map((key) => {
						return (
							<Route path={`/${key}`}>
								<Canvas camera={Story[key].camera}>
									<Experience>
										{Story[key].component}
										{Story[key].characters.map((character) => character)}
									</Experience>
								</Canvas>
								<Scenery
									story={Story}
									levels={Story[key].levels}
									nextScenery={Story[key].nextScenery}
								/>
							</Route>
						);
					})}
					<Route path="/">
						<Landing />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
