import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [intervalNum, setIntervalNum] = useState(0);
  const [data, setData] = useState({
    name: "Huy",
    age: 21,
    education: {
      primary: "good",
      highschool: "good",
    },
  });

  const play = () => {
    const newIntervalNum = setInterval(() => {
      setNumber((num) => num + 1);
    }, 1000); // sau moi 1s thi se increase number
    setIntervalNum(newIntervalNum); // set gia tri intervalId theo num
  };

  const pause = () => {
    clearInterval(intervalNum);
    setIntervalNum(0);
  };

  const change = () => {
    setData({
      ...data,
      education: {
        primary: "excellent",
        highschool: "excellent",
      },
    });
    console.log(data);
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
        <br />
        <div>
          <h4>
            {data.name} {data.age} {data.education.highschool}{" "}
            {data.education.primary}
          </h4>
          <button onClick={change}>change</button>
        </div>
      </header>
    </div>
  );
}

export default App;
