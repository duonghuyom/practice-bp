import { useState, useEffect } from "react";
import "./App.css";

export default function App({ initialCount }) {
  const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount(count + 1);
  // };

  useEffect(() => {
    const id = setTimeout(() => {
      setCount(count + 1);
      // console.log(`You clicked ${count} times`);
      console.log("the component render again");
    }, 1000);
    return () => clearInterval(id);
  });

  // const showAlert = () => {
  //   setTimeout(() => {
  //     alert(`You have clicked ${count} times`)
  //   }, 2000);
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increase}>Click me</button>
      <button onClick={showAlert}>Show alert</button>
      <br />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
