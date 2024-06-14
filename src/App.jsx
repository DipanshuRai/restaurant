import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Details from './components/Details'
import Footer from './components/Footer/Footer'
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
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default App
