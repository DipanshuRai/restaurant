import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
// import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <Router>
      {/* <div>
        <Navbar/>
      </div> */}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
