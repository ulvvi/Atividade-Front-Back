import { useState } from 'react'
import './App.css'
import Cadastro from "./page/cadastro.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Cadastro/>
  )
}

export default App
