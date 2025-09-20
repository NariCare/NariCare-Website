import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NaricareLanding } from "./screens/NaricareLanding/NaricareLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <NaricareLanding />
  </StrictMode>,
);
