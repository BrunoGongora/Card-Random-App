import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './JSON/users.json'
import Card from './Componentes/Card'
import Colors from './Componentes/Colors'

function App() {

  const getData = arr => {
    const randomGenerate = Math.floor(Math.random() * arr.length);
    return arr[randomGenerate]
  }

  let userRandom = getData(users)
  let colorRandom = getData(Colors)

  const [randomUser, setRandomUser] = useState(userRandom);
  const [randomColors, setRandomColors] = useState(colorRandom);

  const getRandomAll = () => {
    userRandom = getData(users)
    colorRandom = getData(Colors)

    setRandomUser(userRandom)
    setRandomColors(colorRandom)
  }

  const objColorBackground = {
    backgroundColor: colorRandom
}


  return (
    <div style={objColorBackground} className="App">
      <Card  userRandom={userRandom} colorRandom={colorRandom} getRandomAll={getRandomAll} />
    </div>
  )
}

export default App
