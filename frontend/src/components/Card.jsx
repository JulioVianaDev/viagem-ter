import "./Card.css"
import {BsFillTrash2Fill} from 'react-icons/bs'
import { FormatarData } from "../fn-helpers/Data"
function Card(props) {
  const {id,data,desc,price} = props
  const dataFormatada = FormatarData(data);

  return (
    <div className="card">
      <h1>{props.nome}</h1>
      <div className="conteudoCard">
        <p>{desc}</p>
        <p>{dataFormatada}</p>
        <p className="price">R$ {price}</p>
      </div>
      <div className="lixeixa" >
        <div className="btns" >
          <div 
            onClick={()=>props.deletarViagem(id)} 
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