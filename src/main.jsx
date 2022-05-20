import React from "react";
import ReactDOM from "react-dom/client";
import { MovieProvider } from "./Context/MovieContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);
