// import './App.css'
import Home from './components/Home'
import Data from './components/Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
   <Router>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/data' element={<Data />} />
    </Routes>
   </Router>
  )
}

export default App
