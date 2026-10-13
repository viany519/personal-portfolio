import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HotelDashboardViewer from './HotelDashboardViewer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HotelDashboardViewer />
  </StrictMode>,
)
