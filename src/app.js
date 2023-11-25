import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import SecondFloor from "./World/SecondFloor/SecondFloor.jsx";
import Story, { s1 } from "./World/Context/TotalStory.jsx";
import { Loader } from "@react-three/drei";
import RefContext from "./World/Context/RefContext.jsx";
import { introState } from "./pages/intro.jsx";

export default function App() {
	return (
		<>
			<RefContext>
				<Router>
					<Switch>
						{/* <Route exact path="/intro">
							<Intro />
							<Scenery
								story={Story}
								levels={introState[0].levels}
								nextScenery="intro-2"
							/>
						</Route> */}
						{/* <Route exact path="/intro-2">
							<Intro />
							<Scenery
								story={Story}
								levels={introState[1].levels}
								nextScenery="intro-3"
							/>
						</Route> */}
						{introState.map((state, index) => {
							return (
								<Route exact path={`/intro-${index}`}>
									{state.component}
									{index && (
										<Scenery
											story={Story}
											levels={state.levels}
											nextScenery={state.nextScenery}
										/>
									)}
								</Route>
							);
						})}
						<Route path="/s1">
							<div id="canvas-container">
								<Canvas camera={{ position: [-1, 4, 2] }}>
									<Experience>
										<SecondFloor />

										{s1.characters[0]}
									</Experience>
								</Canvas>
								<Loader />
								<Scenery story={Story} levels={s1.levels} nextScenery="s2" />
							</div>
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
			</RefContext>
		</>
	);
}
