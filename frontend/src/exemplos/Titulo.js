import React from 'react'
import "./titulo.css"
function Titulo(props) {
  return (
    <h1 className="texto">
      {props.children}
    </h1>
  )
}

export default Titulo