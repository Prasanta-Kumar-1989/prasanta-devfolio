import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* 🔥 Tailwind MUST be first */
import "./tailwind.css";

import "./styles/theme.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
