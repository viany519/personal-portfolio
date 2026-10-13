import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimkostProject from './SimkostProject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimkostProject />
  </StrictMode>,
)
