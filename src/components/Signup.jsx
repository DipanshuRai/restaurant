import React, { useState } from 'react';
import { FaUser, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Header from './Forms/Header';
import InputBox from './Forms/InputBox';
import SubmitButton from './Forms/SubmitButton';
import "./Forms/form.css";

export default function SignUp({ setIsSignUpVisible, setIsLoginVisible }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const closeSignUp = () => {
    setIsSignUpVisible(false);
  };

  const openLogin = (e) => {
    e.preventDefault();
    setIsSignUpVisible(false);
    setIsLoginVisible(true);
  };

  return (
    <div className="login-overlay" onClick={closeSignUp}>
      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <form action="">
          <Header title="Sign Up"/>
          <InputBox 
            type="text" 
            placeholder="Username" 
            icon={FaUser} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox 
            type="email" 
            placeholder="Email Address" 
            icon={IoMdMail} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox 
            type="password" 
            placeholder="Password" 
            icon={FaLock} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputBox 
            type="tel" 
            placeholder="Phone Number" 
            icon={FaPhoneSquareAlt} 
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <SubmitButton submissionType='Sign Up'/>
          <div className="login-link">
            <p>Already have an account? <a href="#" onClick={openLogin}>Log In</a></p>
            <p>Back to <a href="/" onClick={(e) => { e.preventDefault(); closeSignUp(); }}>Home</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
