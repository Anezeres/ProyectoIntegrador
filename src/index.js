import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./app.js";
import React from "react";

const root = createRoot(document.getElementById("root"));

root.render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
