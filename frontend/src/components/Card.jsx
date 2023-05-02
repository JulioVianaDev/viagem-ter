import "./Card.css"
import {BsFillTrash2Fill} from 'react-icons/bs'
import { FormatarData } from "../fn-helpers/Data"
import { useState } from "react"
function Card(props) {
  const {id,data,desc,price} = props
  const dataFormatada = FormatarData(data);
  const [isDelete,setIsDelete] = useState(false)
  const deleteMode=()=>{
    setIsDelete(true);
    setTimeout(()=>{
      props.deletarViagem(id)
    },1000)
  }
  return (
    <div className={isDelete? 'card disappear': 'card'}>
        <h1>{props.nome}</h1>
        <div className="conteudoCard">
          <p>{desc}</p>
          <p>{dataFormatada}</p>
          <p className="price">R$ {price}</p>
        </div>
        <div className="lixeixa" >
          <div className="btns" >
            <div 
              onClick={()=>deleteMode()} 
              id="trashDelete"
              className="icons"
            >
              <BsFillTrash2Fill size={32}/>
            </div>
            <div className="icons">

            </div>
          </div>
      </div>
    </div>
  )
}

export default Card