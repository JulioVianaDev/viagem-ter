import axios from 'axios';
import {useState,useEffect} from 'react';


function App() {
  const [viagens,setViagens] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/api/v1/travels")
      .then(res=>setViagens(res.data))
      .catch(erro=> console.log("deu erro no getAPi: ",erro))
  },[])

  return (
    <div>App</div>
  )
}

export default App