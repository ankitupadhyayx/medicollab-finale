import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // make sure Tailwind is applied

const root = ReactDOM.createRoot(
  document.getElementById("root")! // <-- the "!" is important
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
