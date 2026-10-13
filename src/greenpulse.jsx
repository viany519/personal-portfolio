import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GreenPulseCaseStudy from './GreenPulseCaseStudy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GreenPulseCaseStudy />
  </StrictMode>,
)
