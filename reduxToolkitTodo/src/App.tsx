import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
    <h1 className='font-bold text-2xl'>React Toolkit Todod List</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
