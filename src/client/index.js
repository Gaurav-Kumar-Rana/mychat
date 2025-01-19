import React from "react";
import { createRoot } from "react-dom/client";
import ClientApp from "../components/App";

const root = createRoot(document.getElementById("root"));
root.render(<ClientApp />);
