import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BookTable from './components/BookTable';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Beverages from './components/menu-items/beverages';
import './App.css';

function App() {
  const [isBookTableVisible, setIsBookTableVisible] = useState(false);

  return (
    <Router>
      <MainContent
        isBookTableVisible={isBookTableVisible}
        setIsBookTableVisible={setIsBookTableVisible}
      />
    </Router>
  );
}

function MainContent({ isBookTableVisible, setIsBookTableVisible }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsBookTableVisible(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar setIsBookTableVisible={setIsBookTableVisible} />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Land />} />

          <Route path="/Menu" element={<Menu />} />
          <Route exact path = "/Menu/Beverages" element = {<Beverages />} />

          <Route path="/book-table" element={<BookTable setIsBookTableVisible={setIsBookTableVisible} />} />
          <Route path="/about-us" element={<Details />} />
          <Route path="/contact" element={<Footer />} />

        </Routes>
      </div>
      {isBookTableVisible && <BookTable setIsBookTableVisible={setIsBookTableVisible} />}
    </>
  );
}

function Land() {
  const location = useLocation();
  const hideNavbarPaths = ['/book-table'];
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
