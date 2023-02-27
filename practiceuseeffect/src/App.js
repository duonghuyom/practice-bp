import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
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
      {/* <button onClick={increase}>Click me</button> */}
      {/* <button onClick={showAlert}>Show alert</button> */}
    </div>
  );
}
