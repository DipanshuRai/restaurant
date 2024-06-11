import React from 'react'
import { FaUser,FaLock,FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import PropTypes from 'prop-types'
import "./form.css"

function InputBox(props) {
    let IconComponent = null;
    switch (props.placeholder) {
    case "Username":
        IconComponent = FaUser;
        break;
    case "Email Address":
        IconComponent = IoMdMail;
        break;
    case "Password":
        IconComponent = FaLock;
        break;
    case "Phone Number":
        IconComponent = FaPhoneSquareAlt;
        break;
    default:
        break;
  }
  return (
    <div className="input-box">
        <input type={props.type} placeholder={props.placeholder} required></input>
        {IconComponent &&<IconComponent className='icon'/>}
    </div>
  );
}

InputBox.propTypes={
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default InputBox;