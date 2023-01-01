import { useState, useEffect } from 'react'
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  const showAlert = () => {
    setTimeout(() => {
      alert(`You have clicked ${count} times`)
    }, 2000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increase}>Click me</button>
      <button onClick={showAlert}>Show alert</button>
    </div>
  );
}
