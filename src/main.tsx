import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

async function mountApp() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mock/browser");
    await worker.start(); // 첫 요청 전에 모킹 준비
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
