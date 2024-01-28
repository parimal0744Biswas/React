import React, { useState } from "react";
import './App.css';

function App() {

  let [counter, setCounter] = useState(5);

  //let counter = 15;
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter((counter > 0) ? counter - 1 : 0);
  }




  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
      <h3>footer : {counter}</h3>
    </>
  );
}

export default App;
