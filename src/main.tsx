import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./style/app.css";
import { LocalizationContextProvider } from "./context/localization/LocalizationContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LocalizationContextProvider>
      <App />
    </LocalizationContextProvider>
  </BrowserRouter>,
);
