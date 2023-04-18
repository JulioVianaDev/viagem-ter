import axios from 'axios';
import {useState,useEffect} from 'react';
import Form from './components/Form';

function App() {
  const [viagens,setViagens] = useState([]);
  const [travel,setTravel] = useState({
    nome: '',
    data: '',
    desc: '',
    price: 0
  })

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
          price: 0
        })
      })
  }

  function EnvioFormulario(e){
    e.preventDefault()
    cadastrarViagem(travel)
  }
  return (
    <div>
      <Form
        travel={travel}
        setTravel={setTravel}
        EnvioFormulario={EnvioFormulario}
      />
      {
        viagens.map(v=>
          <h1>{v.nome}</h1>
        )
      }
    </div>
  )
}

export default App