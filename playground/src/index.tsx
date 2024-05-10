import Application from "./components/Application.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./style/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Application />
  </StrictMode>
);
