import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Forms/Signup'
// import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <Router>
      {/* <div>
        <Navbar/>
      </div> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* <Route path="/" element={<Navbar />} /> */}
      </Routes>
    </Router>
  )
}

export default App
