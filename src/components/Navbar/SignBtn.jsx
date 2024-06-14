import React from 'react'
import {Link} from 'react-router-dom'

function SignBtn() {
  return (
    <div className="action_btn">
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default SignBtn