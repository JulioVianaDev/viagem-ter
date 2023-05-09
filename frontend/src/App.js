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
  const [editID,setEditID] = useState(null);
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
    cadastrarViagem(travel)
  }
  const [viagemAtual,setViagemAtual] = useState({})
  function acharViagem(id){
    setViagemAtual(viagens.filter(v =>v.id === id)[0])
    setTravel({
      nome: viagemAtual.nome,
      data: viagemAtual.travel,
      desc: viagemAtual.desc,
      price: viagemAtual.price
    })
  }
  return (
    <div>
      <Form
        id={editID}
        viagemAtual={viagemAtual}
        travel={travel}
        setTravel={setTravel}
        EnvioFormulario={EnvioFormulario}
      />
      <div className='cards'>
        {
          viagens.map(v=>
            <Card
              key={v.id}
              acharViagem={acharViagem}
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