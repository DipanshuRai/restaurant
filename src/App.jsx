import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Landing from './components/Landing';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}


function MainContent() {
return (
  <>
      <Routes>
        <Route path='/' element={<Land/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
      
    </>
  );
}

function Land(){
    const location = useLocation();
    const hideNavbarPaths = ['/signup', '/login'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  return (
    <>
    {!shouldHideNavbar && <Navbar />}
    {!shouldHideNavbar && <Landing/>}
    {!shouldHideNavbar && <Details/>}
    {!shouldHideNavbar && <Footer/>}
    </>
  )
}

export default App;
