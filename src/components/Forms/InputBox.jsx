import React from 'react'
import { FaUser,FaLock,FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import PropTypes from 'prop-types'
import "./form.css"

const iconMap = {
    "Username": FaUser,
    "Email Address": IoMdMail,
    "Password": FaLock,
    "Phone Number": FaPhoneSquareAlt,
};
function InputBox(props) {

    const IconComponent = iconMap[props.placeholder] || null;

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