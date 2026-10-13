import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CgpaProject from './CgpaProject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CgpaProject />
  </StrictMode>,
)
