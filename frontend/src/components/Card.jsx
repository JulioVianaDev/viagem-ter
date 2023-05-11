import "./Card.css"
import {BsFillTrash2Fill} from 'react-icons/bs'
import { FormatarData } from "../fn-helpers/Data"
import { useState } from "react"
import {FiEdit} from 'react-icons/fi'
function Card(props) {
  const {id,data,desc,price} = props
  const dataFormatada = FormatarData(data);
  const [isDelete,setIsDelete] = useState(false)

  const deleteMode=()=>{
    setIsDelete(true);
    setTimeout(()=>{
      props.deletarViagem(id)
    },700)
    props.setEditID(null)
  }
  const setEditing = ()=>{
    props.setTravel({
      nome: props.nome,
      data: data,
      desc: desc,
      price: price
    })
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
            <div onClick={()=>setEditing()} className="icons">
              <FiEdit size={32}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card