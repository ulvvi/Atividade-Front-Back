import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Cadastro from "./page/cadastro.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro/>
  </StrictMode>,
)
