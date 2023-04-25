import "./Card.css"
import {BsFillTrash2Fill} from 'react-icons/bs'
function Card(props) {
  const {id,data,desc,price} = props
  return (
    <div className="card">
      <h1>{props.nome}</h1>
      <div>
        <p>{desc}</p>
        <p>{data}</p>
        <p>{price}</p>
      </div>
      <div className="lixeixa" >
        <button onClick={()=>props.deletarViagem(id)}>
          <BsFillTrash2Fill size={32}/>
        </button>
      </div>
    </div>
  )
}

export default Card