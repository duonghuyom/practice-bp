import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const play = () => {
    const newIntervalId = setInterval(() => {
      setNumber((num) => num + 1);
    }, 1000); // sau moi 1s thi se increase number
    setIntervalId(newIntervalId); // set gia tri intervalId theo num
  };

  const pause = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>{number}</h1>
          <button onClick={play}>play</button>
          <button onClick={pause}>pause</button>
        </div>
      </header>
    </div>
  );
}

export default App;
