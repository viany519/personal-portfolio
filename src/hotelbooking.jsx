import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HotelBookingCaseStudy from './HotelBookingCaseStudy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HotelBookingCaseStudy />
  </StrictMode>,
)
