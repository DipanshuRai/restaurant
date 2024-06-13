import React from 'react';
import PropTypes from 'prop-types';
import "./form.css";

function InputBox({ type, placeholder, icon: IconComponent }) {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} required />
      {IconComponent && <IconComponent className='icon' />}
    </div>
  );
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default InputBox;
