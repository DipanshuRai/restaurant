import React from 'react'
import PropTypes from 'prop-types'
import "./form.css"

function SubmitButton(props) {
    let buttonText="";
    switch(props.submissionType){
        case "Sign Up":
            buttonText='Sign Up';
            break;
        case "Log in":
            buttonText='Log In';
            break;
        default:
            buttonText='Submit';
            break;
    }
  return (
    <button type='submit'>{buttonText}</button>
  );
}

SubmitButton.propTypes={
    submissionType: PropTypes.string.isRequired
};

export default SubmitButton;