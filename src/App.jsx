import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;