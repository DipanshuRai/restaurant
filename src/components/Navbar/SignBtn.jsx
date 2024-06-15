import React from 'react';

function SignBtn({ onClick }) {
  return (
    <button className="sign-btn" onClick={onClick}>
      Sign In
    </button>
  );
}

export default SignBtn;
