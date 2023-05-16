import axios from 'axios';
import {useState,useEffect} from 'react';
import Form from './components/Form';
import Card from './components/Card';
function App() {
  const [viagens,setViagens] = useState([]);
  const [travel,setTravel] = useState({
    nome: '',
    data: '',
    desc: '',
    price: ''
  })
  const [editID,setEditID] = useState(-1);
  useEffect(()=>{
    axios.get("http://localhost:3001/api/v1/travels")
      .then(res=>setViagens(res.data))
      .catch(erro=> console.log("deu erro no getAPi: ",erro))
  },[])

  const cadastrarViagem=(travel)=>{
    axios.post("http://localhost:3001/api/v1/travels",{travel})
      .then(res=>{
        console.log(res.data);
        setViagens([...viagens,res.data])
        setTravel({
          nome: '',
          data: '',
          desc: '',
          price: ''
        })
      })
  }
  const deleteTravel = (id)=>{
    axios.delete(`http://localhost:3001/api/v1/travels/${id}`)
      .then(res=>{
        console.log(res.data)
        setViagens(viagens.filter(v => v.id !== id))
      })
      .catch(error=>console.error("erro ao deletar"))
  }
  function EnvioFormulario(e){
    e.preventDefault()
    if(editID !== -1){
      console.log("era pra estar editando")
      setEditID(-1)
      setTravel({
        nome: '',
        data: '',
        desc: '',
        price: ''
      })
      return
    }
    cadastrarViagem(travel)
  }

  return (
    <div>
      <Form
        id={editID}
        travel={travel}
        setTravel={setTravel}
        EnvioFormulario={EnvioFormulario}
      />
      <div className='cards'>
        {
          viagens.map(v=>
            <Card
              key={v.id}
              setTravel={setTravel}
              deletarViagem = {deleteTravel}
              nome={v.nome}
              id={v.id}
              data={v.data}
              desc={v.desc}
              price={v.price}
              setEditID={setEditID}
            />
          )
        }
      </div>
    </div>
  )
}

export default App