import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css';    {/*Para hacerlo global en el proyecto, se importa aqui*/}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GiftExpertApp />
  // </StrictMode>
)
