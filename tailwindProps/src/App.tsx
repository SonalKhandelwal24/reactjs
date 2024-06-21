import './App.css'
import Card from './components/Card'

function App() {

  // const myArr = [1, 2, 3]
  // const obje = {
  //   name:'Sonal',
  //   age:20
  // }

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-xl mb-5'>Tailwind Test</h1>
      {/* <Card  username ="Sonal" obj = {obje} objArr = {myArr} />       */}

      <Card username = "Sonal Khandelwal" btnText = "Click Me" />      
      <Card username = "Neha Songrah" btnText = "Visit Me" />      
      <Card username = "Priya Giri" />      
    </>
  )
}

export default App
