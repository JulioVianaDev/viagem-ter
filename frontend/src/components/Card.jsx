import "./Card.css"
import {BsFillTrash2Fill} from 'react-icons/bs'
function Card(props) {
  return (
    <div className="card">
      <h1>{props.nome}</h1>
      <div className="lixeixa" >
        <BsFillTrash2Fill size={32}/>
      </div>
    </div>
  )
}

export default Card