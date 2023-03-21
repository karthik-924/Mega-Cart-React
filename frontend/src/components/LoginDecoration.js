import React from 'react'
import "./LoginDecoration.css"
const LoginDecoration = (props) => {
    console.log(props)
  return (
      <div className={props.left?"square1":"square2"}></div>
  )
}

export default LoginDecoration
