import { useState } from 'react'
import Cadastro from "./page/cadastro.tsx"
import Login from "./page/Login.tsx";
import Error from "./page/error.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Error />
    </div>
  )
}

export default App
