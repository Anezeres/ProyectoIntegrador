import Dialogs from "./Components/Dialogs";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scenery from "./Story/Scenery";
import Landing from "./pages/landing";
import RefContext, { StoryContext } from "./World/Context/RefContext.jsx";

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/start">
						<div id="canvas-container">
							<Canvas camera={{ position: [-1, 4, 7] }}>
								<Experience />
							</Canvas>
							<StoryContext>
								<Scenery />
							</StoryContext>
							{/* elementos que no tienen 3D */}
						</div>
					</Route>
					<Route path="/landing">
						<Landing />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
