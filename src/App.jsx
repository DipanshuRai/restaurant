import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Details from './components/Details'
// import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <Router>
      {/* <div>
        <Navbar/>
      </div> */}
      <Routes>
        {/* <Route path='/' element={<Hero/>} /> */}
        <Route path='/Details' element={<Details/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
