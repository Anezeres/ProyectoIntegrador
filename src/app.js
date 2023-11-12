import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import { StoryContext } from "./World/Context/RefContext.jsx";
import SecondFloor from "./World/SecondFloor/SecondFloor.jsx";

import Story, { s1 } from "./World/Context/TotalStory.jsx";
import { Loader } from "@react-three/drei";

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/s1">
						{" "}
						{/*Aquí debería estar la intro, por ahora es el escenario 1*/}
						<Canvas camera={{ position: [-1, 4, 2] }}>
							<Experience>
								{/* <RigidBody type="fixed"> */}
								<SecondFloor />
								{/* </RigidBody> */}

								{s1.characters[0]}
							</Experience>
						</Canvas>
						<Loader />
						<StoryContext>
							<Scenery story={Story} levels={s1.levels} nextScenery="s2" />
						</StoryContext>
					</Route>

					{Object.keys(Story).map((key) => {
						return (
							<Route path={`/${key}`}>
								<Canvas camera={Story[key].camera}>
									<Experience>
										{Story[key].component}
										{Story[key].characters.map((character) => character)}
									</Experience>
								</Canvas>
								<StoryContext>
									<Scenery
										story={Story}
										levels={Story[key].levels}
										nextScenery={Story[key].nextScenery}
									/>
								</StoryContext>
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
