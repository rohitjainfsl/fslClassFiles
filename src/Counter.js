import { useState } from "react";

//State: tells you the current state of any react component / variable

//State variables: are variables. Whenever a state variable is modified, components using that state variables are re-rendered.

//States are immutable

//State variables cannot be nodified directly. These are modified using the function defined with them.

// Hooks: are predefined functions in react. Hook names always start with the word 'use'

export function Counter() {
  const [count, setCount] = useState(0);

  // const count = 0
  // function setCount(temp){
  //     count = temp
  // }

  function increment() {
    if (count < 10) setCount(count + 1);
  }
  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  const styles = {
    backgroundColor: "#faa361",
    color: "#fff",
    borderRadius: "0.5rem",
    border: "3px solid #fff",
    padding: "10px 7px"
  };

  return (
    <>
      <button onClick={increment} style={styles}>
        Increment
      </button>
      <p>{count}</p>
      <button onClick={decrement} style={styles}>Decrement</button>
    </>
  );
}
