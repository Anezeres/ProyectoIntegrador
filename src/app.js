import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import RefContext from "./Context/RefContext.jsx";
import { introState } from "./pages/intro.jsx";
import Story from "./Story/TotalStory.jsx";
import GameOver from "./Components/GameOver.jsx";
import Continuara from "./Components/Continuara.jsx";

export default function App() {
	return (
		<>
			<RefContext>
				<Router>
					<Switch>
						<Route exact path="/continuara">
							<Continuara />
						</Route>
						<Route exact path="/gameover">
							<GameOver />
						</Route>
						{introState.map((state, index) => {
							return (
								<Route key={index} exact path={`/intro-${index}`}>
									{state.component}
									{index && (
										<Scenery
											story={Story}
											levels={state.levels}
											nextScenery={state.nextScenery}
											thereIsMission={state.thereIsMission}
										/>
									)}
								</Route>
							);
						})}
						{Object.keys(Story).map((key) => {
							return (
								<Route path={`/${key}`} key={key}>
									<Canvas camera={Story[key].camera} shadows>
										<Experience ruta={key}>
											{Story[key].component}
											{Story[key].characters.map((character) => character)}
										</Experience>
									</Canvas>
									<Scenery
										story={Story}
										levels={Story[key].levels}
										nextScenery={Story[key].nextScenery}
										currentScenery={Story[key].currentScenery}
										thereIsMission={Story[key].thereIsMission}
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
