import React from 'react'
import PropTypes from 'prop-types'
import "./form.css"


const buttonTextMap = {
    "Sign Up": "Sign Up",
    "Log in": "Log In",
};

function SubmitButton(props) {
    const buttonText = buttonTextMap[props.submissionType] || 'Submit';
    
  return (
    <button type='submit'>{buttonText}</button>
  );
}

SubmitButton.propTypes={
    submissionType: PropTypes.string.isRequired
};

export default SubmitButton;