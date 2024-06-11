import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import InputBox from './InputBox';
import SubmitButton from './SubmitButton';
import "./form.css";

export default function Login() {
  const [username,setUsername] = useState("Username");
  const [password,setPassword] = useState("Password");
  
  return (
    <div className="form-body">
      <div className='main'>
        <form action="">
          <Header title="Log In"/>
          <InputBox type="text" placeholder={username} onChange={(e) => setUsername(e.target.value)}/>
          <InputBox type="password" placeholder={password} onChange={(e) => setPassword(e.target.value)}/>
          <SubmitButton submissionType='Log In'/>
          <div className="login-link">
            <p>Don't have account?<Link to="/Signup">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}