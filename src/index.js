import { StrictMode } from "react";
import ReactDom from "react-dom/client";

import App from "./components/App.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
