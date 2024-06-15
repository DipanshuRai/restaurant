import React, { useState } from 'react';
import { FaUser, FaPhoneSquareAlt } from "react-icons/fa";
import Header from './Forms/Header';
import InputBox from './Forms/InputBox';
import SubmitButton from './Forms/SubmitButton';
import "./Forms/form.css";

export default function BookTable({ setIsBookTableVisible }) {
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  const closeBookTable = () => {
    setIsBookTableVisible(false);
  };

  return (
    <div className="login-overlay" onClick={closeBookTable}>
      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <form action="">
          <Header title="Book a Table" />
          <InputBox 
            type="text" 
            placeholder="Name" 
            icon={FaUser} 
            onChange={(e) => setName(e.target.value)}
          />
          <InputBox 
            type="number"
            placeholder="Number of People" 
            icon={FaUser} 
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
          <div className="input-box-group">
            <div className="input-box">
              <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
              />
            </div>
            <div className="input-box">
              <select className='time-dropdown' value={time} onChange={(e) => setTime(e.target.value)}>
                {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'].map((time, i) => (
                  <option key={i} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          <InputBox 
            type="tel" 
            placeholder="Contact Details" 
            icon={FaPhoneSquareAlt} 
            onChange={(e) => setContact(e.target.value)}
          />
          <SubmitButton submissionType='Book Now' />
          <div className="login-link">
            <p>Back to <a href="/" onClick={(e) => { e.preventDefault(); closeBookTable(); }}>Home</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
