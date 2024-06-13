import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Header from './Forms/Header';
import InputBox from './Forms/InputBox';
import SubmitButton from './Forms/SubmitButton';
import "./Forms/form.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="form-body">
      <div className='main'>
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
          <div className="signup-link">
            <p>Already have an account? <Link to="/Login">Log In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
