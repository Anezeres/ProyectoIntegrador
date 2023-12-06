import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import Story from "./World/Context/TotalStory.jsx";
import RefContext from "./World/Context/RefContext.jsx";
import { introState } from "./pages/intro.jsx";
import SegundoEscenario from "./World/MundoVirtual/SegundoEscenario/SegundoEscenario.jsx";

export default function App() {
	return (
		<>
			<RefContext>
				<Router>
					<Switch>
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
						;
						{Object.keys(Story).map((key) => {
							return (
								<Route path={`/${key}`} key={key}>
									<Canvas camera={Story[key].camera}>
										<Experience ruta={key}>
											{Story[key].component}
											{Story[key].characters.map((character) => character)}
										</Experience>
									</Canvas>
									<Scenery
										story={Story}
										levels={Story[key].levels}
										nextScenery={Story[key].nextScenery}
										currentScenary={Story[key].currentScenary}
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
