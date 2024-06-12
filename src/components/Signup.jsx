import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './Forms/Header';
import InputBox from './Forms/InputBox';
import SubmitButton from './Forms/SubmitButton';
import "./Forms/form.css";

export default function Signup() {
  const [username,setUsername] = useState("Username");
  const [email,setEmail] = useState("Email Address");
  const [password,setPassword] = useState("Password");
  const [phoneNumber,setPhoneNumber] = useState("Phone Number");

  return (
    <div className="form-body">
      <div className='main'>
        <form action="">
          <Header title="Sign Up"/>
          <InputBox type="text" placeholder={username} onChange={(e) => setUsername(e.target.value)}/>
          <InputBox type="email" placeholder={email} onChange={(e) => setEmail(e.target.value)}/>
          <InputBox type="password" placeholder={password} onChange={(e) => setPassword(e.target.value)}/>
          <InputBox type="tel" placeholder={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <SubmitButton submissionType='Sign Up'/>
          <div className="login-link">
            <p>Already have account?<Link to="/Login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}