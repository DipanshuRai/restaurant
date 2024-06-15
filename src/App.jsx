import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BookTable from './components/BookTable';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isBookTableVisible, setIsBookTableVisible] = useState(false);

  return (
    <Router>
      <MainContent
        isLoginVisible={isLoginVisible}
        setIsLoginVisible={setIsLoginVisible}
        isBookTableVisible={isBookTableVisible}
        setIsBookTableVisible={setIsBookTableVisible}
      />
    </Router>
  );
}

function MainContent({ isLoginVisible, setIsLoginVisible, isBookTableVisible, setIsBookTableVisible }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoginVisible(false);
      setIsBookTableVisible(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar setIsLoginVisible={setIsLoginVisible} setIsBookTableVisible={setIsBookTableVisible} />
      <div className={`main-content ${(isLoginVisible || isBookTableVisible) ? 'blurred' : ''}`}>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login setIsLoginVisible={setIsLoginVisible} />} />
          <Route path="/book-table" element={<BookTable setIsBookTableVisible={setIsBookTableVisible} />} />
        </Routes>
      </div>
      {isLoginVisible && <Login setIsLoginVisible={setIsLoginVisible} />}
      {isBookTableVisible && <BookTable setIsBookTableVisible={setIsBookTableVisible} />}
    </>
  );
}

function Land() {
  const location = useLocation();
  const hideNavbarPaths = ['/book-table', '/login'];
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
