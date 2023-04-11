import EX2 from "./exemplos/ArrowFunction";
import Botao from "./exemplos/Botao";
import Ex1 from "./exemplos/function";
import PropsAbistrado from "./exemplos/props/PropsAbistrado";
import Props from './exemplos/props/props'
import {useState,useEffect} from 'react';

function App(){
  const [valorInicial,FunctionParaMudarOValor] = useState("primeiro valor")
  const [hide,setHide] = useState(false);

  function MudarValor(){
    FunctionParaMudarOValor("mudei");
  }

  useEffect(()=>{
    console.log("funcionei");
  },[valorInicial])

  const data = 	{
		"id": 1,
		"nome": "Denver International Airport",
		"data": "2023-05-15T06:44:39.000Z",
		"price": 92.89,
		"desc": "Solid Autoclave",
		"created_at": "2023-03-28T21:55:13.114Z",
		"updated_at": "2023-03-28T21:55:13.114Z"
	}

  return(
    <>
      <h1>Opa {valorInicial}</h1>
      <button onClick={MudarValor}> Clique aqui para mudar o valor</button>
      <br></br>
      <Botao
        cor='blue'
        tarefa={()=>console.log("cliquei")}
        texto="clique para exibir no console"
      />
      {hide && "texto hide true" }<br/>
      {!hide && "texto hide não true" }<br/>
      {hide ?"se o hide estiver true" : "se o hide não estiver true" }<br/>
      {!hide ?"se o hide estiver false" : "se o hide não estiver false" }<br/>
      <button onClick={()=>setHide(!hide)}> Inverter hide</button><br/>
      <Ex1/>
      <EX2/>
      <Props numero="14" nome="julio" idade='21' />
      <Props numero="20" nome="antonio" idade='80' />
      <PropsAbistrado num1={5} num2={4} />
    </>
  )
}

export default App;