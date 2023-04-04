import EX2 from "./exemplos/ArrowFunction";
import Ex1 from "./exemplos/function";
import PropsAbistrado from "./exemplos/props/PropsAbistrado";
import Props from './exemplos/props/props'
function App(){

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
      <h1>Opa</h1>
      <Ex1/>
      <EX2/>
      <Props numero="14" nome="julio" idade='21' />
      <Props numero="20" nome="antonio" idade='80' />
      <PropsAbistrado num1={5} num2={4} />
    </>
  )
}

export default App;