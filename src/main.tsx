import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router.tsx";
import { AuthorsProvider } from "./context/AuthorsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthorsProvider>
      <AppRouter />
    </AuthorsProvider>
  </StrictMode>
);
