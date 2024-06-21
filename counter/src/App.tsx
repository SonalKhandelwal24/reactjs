import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter ] = useState(1)
  
  // let counter = 1;

  const addValue = () => {
    // counter = counter + 1; 
    if(counter >= 20){
      alert("Limit exceeds!!");
    }else{
      console.log(counter + 1);
      setCounter(counter + 1);
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