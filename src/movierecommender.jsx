import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MovieRecommenderProject from './MovieRecommenderProject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieRecommenderProject />
  </StrictMode>,
)
