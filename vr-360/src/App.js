import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Pannellum } from "pannellum-react";
import image from "./image.png";
function App() {
  return (
    <div>
      <h1>Pannellum React Component</h1>
      <Pannellum
        width="100%"
        height="80vh"
        image={image}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
        }}
      ></Pannellum>
    </div>
  );
}

export default App;
