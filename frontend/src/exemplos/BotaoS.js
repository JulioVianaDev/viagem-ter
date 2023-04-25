import React from 'react'
import "./botao.css"
function BotaoS(props) {
  const {texto} = props
  return (
    <button className={props.cor}>{texto}</button>
  )
}

export default BotaoS