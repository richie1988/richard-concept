import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/process.css";
import "./styles/contact-modal.css";
import "./styles/whatsapp-float.css";
import "./styles/scroll-top.css";
import "./styles/personal-projects-modal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);