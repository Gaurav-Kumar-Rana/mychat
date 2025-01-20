import React from "react";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import App from "../components/App";

//Client Render
const root = createRoot(document.getElementById("root"));
root.render(<App />);

//SSR
// const container = document.getElementById("root");
// hydrateRoot(container, <App />);
