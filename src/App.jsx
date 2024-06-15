import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  return (
    <Router>
      <MainContent
        isLoginVisible={isLoginVisible}
        setIsLoginVisible={setIsLoginVisible}
        isSignUpVisible={isSignUpVisible}
        setIsSignUpVisible={setIsSignUpVisible}
      />
    </Router>
  );
}

function MainContent({ isLoginVisible, setIsLoginVisible, isSignUpVisible, setIsSignUpVisible }) {
  const location = useLocation();

  // Close both overlays when navigating to the home page
  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoginVisible(false);
      setIsSignUpVisible(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar setIsLoginVisible={setIsLoginVisible} />
      <div className={`main-content ${(isLoginVisible || isSignUpVisible) ? 'blurred' : ''}`}>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path="/signup" element={<Signup setIsSignUpVisible={setIsSignUpVisible} setIsLoginVisible={setIsLoginVisible} />} />
          <Route path="/login" element={<Login setIsLoginVisible={setIsLoginVisible} setIsSignUpVisible={setIsSignUpVisible} />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
      {isLoginVisible && <Login setIsLoginVisible={setIsLoginVisible} setIsSignUpVisible={setIsSignUpVisible} />}
      {isSignUpVisible && <Signup setIsSignUpVisible={setIsSignUpVisible} setIsLoginVisible={setIsLoginVisible} />}
    </>
  );
}

function Land() {
  const location = useLocation();
  const hideNavbarPaths = ['/signup', '/login'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  return (
    <>
      {!shouldHideNavbar && <Landing />}
      {!shouldHideNavbar && <Details />}
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default App;
