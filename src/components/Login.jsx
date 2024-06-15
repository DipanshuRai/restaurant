import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import Header from './Forms/Header';
import InputBox from './Forms/InputBox';
import SubmitButton from './Forms/SubmitButton';
import "./Forms/form.css";

export default function Login({ setIsLoginVisible, setIsSignUpVisible }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const closeLogin = () => {
    setIsLoginVisible(false);
  };

  const openSignUp = (e) => {
    e.preventDefault();
    setIsLoginVisible(false);
    setIsSignUpVisible(true);
  };

  return (
    <div className="login-overlay" onClick={closeLogin}>
      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <form action="">
          <Header title="Log In"/>
          <InputBox 
            type="text" 
            placeholder="Username" 
            icon={FaUser} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox 
            type="password" 
            placeholder="Password" 
            icon={FaLock} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton submissionType='Log In'/>
          <div className="login-link">
            <p>Don't have an account? <a href="#" onClick={openSignUp}>Sign Up</a></p>
            <p>Back to <a href="/" onClick={(e) => { e.preventDefault(); closeLogin(); }}>Home</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
