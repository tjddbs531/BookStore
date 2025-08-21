import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

async function mountApp() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mock/browser");
    await worker.start();
  }

  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("#root element not found");

  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

mountApp();
