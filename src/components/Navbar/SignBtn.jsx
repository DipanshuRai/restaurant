import React from 'react';

function SignBtn({ onClick }) {
  return (
    <button className="action_btn" onClick={onClick}>
      LogIn
    </button>
  );
}

export default SignBtn;
