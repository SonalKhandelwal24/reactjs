import { useState, } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App() {

  let [counter, setCounter] = useState(1)
  let [message, setMessage] = useState(" ")

  // let counter = 1;


  const notify = () => toast("value don't exceeds above 10!!");
  const addValue = () => {
    if (counter >= 10) {
      // setMessage("value don't exceeds above 10");
      {notify};
    } else {
      setCounter(counter => counter + 1);
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      // setMessage(" value less than zero");
    } else {
      setCounter(counter - 1);
      console.log(counter - 1);
    }
  }

  return (
    <>
      <h1>React Mini Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue} >Add Value </button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
      <br />
      <ToastContainer />
    </>
  )
}

export default App
