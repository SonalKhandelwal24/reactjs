import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter ] = useState(1)
  
  // let counter = 1;

  const addValue = () => {
    // counter = counter + 1; 
    if(counter >= 50){
      alert("Limit exceeds!!");
    }else{
      // console.log(counter + 1);
      //when we call a callback function then it will increases the value of counter coz first call back function returns the counter value nd so on...
      setCounter(counter => counter + 1); 
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);

      //this is not increase the value of counter variable coz useState bundler bundles this values, and increase the value of counter only once
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
    }
      
  }

  const removeValue = () => {
    if(counter <= 0){
      alert("Value can't be negative!!");
    }else{
      setCounter(counter - 1);
      console.log(counter - 1);
    }
  }

  return (
    <>
    <h1>React Mini Project</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value </button>
    <br />
    <button onClick={removeValue}>Remove Value </button>
    </>   
  )
}

export default App
