import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-black text-white flex flex-col h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-1 min-h-screen">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
