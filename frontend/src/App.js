import axios from 'axios';
import {useState,useEffect} from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Popup from './components/Popup';
function App() {
  const [viagens,setViagens] = useState([]);
  const [travel,setTravel] = useState({
    nome: '',
    data: '',
    desc: '',
    price: '',
    image: null
  })
  const [showPopup,setShowPopup] = useState(false);
  const [editID,setEditID] = useState(-1);
  const [popupContent,setPopupContent] = useState({message: '',color: ''})

  function showAndHidePopup(){
    setShowPopup(true);
    setTimeout(()=>{
      setShowPopup(false);
    },3500)
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/api/v2/travels")
      .then(res=>setViagens(res.data))
      .catch(erro=> console.log("deu erro no getAPi: ",erro))
  },[])

  const cadastrarViagem=(formData)=>{
    axios.post("http://localhost:3001/api/v2/travels",formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res=>{
        console.log(res.data);
        setViagens([...viagens,res.data])
        setTravel({
          nome: '',
          data: '',
          desc: '',
          price: '',
          image: null
        })
        setPopupContent({
          message: 'Card Cadastrado com Sucesso',
          color: 'success'
        })
        showAndHidePopup()
      })
      .catch(erro=>{
        console.error(erro);
        setPopupContent({
          message: 'Não deu pra cadastrar!',
          color: 'warning'
        })
        showAndHidePopup()
      })
  }
  const deleteTravel = (id)=>{
    axios.delete(`http://localhost:3001/api/v2/travels/${id}`)
      .then(res=>{
        console.log(res.data)
        setViagens(viagens.filter(v => v.id !== id))
        setPopupContent({
          message: 'Card Deletado com Sucesso',
          color: 'success'
        })
        showAndHidePopup()
      })
      .catch(error=>{
        console.error("erro ao deletar")
        setPopupContent({
          message: 'Não foi possivel deletar',
          color: 'warning'
        })
        showAndHidePopup()
      })
  }
  const editTravel = (id,travel)=>{
    axios.put(`http://localhost:3001/api/v2/travels/${id}`,{travel}) 
      .then(res=>{
        let newListaDeViagens = viagens.map( v=>{
          if(v.id === id){
            return res.data
          }
          return v
        })
        setViagens(newListaDeViagens)
        setPopupContent({
          message: 'Card Editada com Sucesso',
          color: 'success'
        })
        showAndHidePopup()
      })
      .catch(erro=>{
        console.log("erro ao atualizar")
        setPopupContent({
          message: 'Não deu pra editar!',
          color: 'warning'
        })
        showAndHidePopup()
      })
  }
  function EnvioFormulario(e){
    e.preventDefault()
    if(editID !== -1){
      editTravel(editID,travel)
      setEditID(-1)
      setTravel({
        nome: '',
        data: '',
        desc: '',
        price: ''
      })
      return
    }
    const formData = new FormData();
    formData.append('travel[image]',travel.image);
    formData.append('travel[nome]',travel.nome);
    formData.append('travel[desc]',travel.desc);
    formData.append('travel[price]',travel.price);
    formData.append('travel[data]',travel.data);
    cadastrarViagem(formData)
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
              image_url={v.image_url}
              setEditID={setEditID}
            />
          )
        }
        {
          showPopup ? 
            <Popup 
              message={popupContent.message}
              color={popupContent.color}
            />
          : null
        }
      </div>
    </div>
  )
}

export default App