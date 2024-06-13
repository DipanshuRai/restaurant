import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Header from './Forms/Header';
import InputBox from './Forms/InputBox';
import SubmitButton from './Forms/SubmitButton';
import "./Forms/form.css";

export default function SignUp() {
  return (
    <div className="form-body">
      <div className='main'>
        <form action="">
          <Header title="Sign Up"/>
          <InputBox type="text" placeholder="Username" icon={FaUser} />
          <InputBox type="email" placeholder="Email Address" icon={IoMdMail} />
          <InputBox type="password" placeholder="Password" icon={FaLock} />
          <InputBox type="tel" placeholder="Phone Number" icon={FaPhoneSquareAlt} />
          <SubmitButton submissionType='Sign Up'/>
          <div className="login-link">
            <p>Already have an account? <Link to="/Login">Log In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
