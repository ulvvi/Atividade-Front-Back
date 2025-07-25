import { useState } from 'react'
import Cadastro from "./page/cadastro.tsx"
import Login from "./page/Login.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
      {/* <h1>Welcome to the App</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button> */}
      {/* Add more components or routes here as needed */}
    </div>
  )
}

export default App
