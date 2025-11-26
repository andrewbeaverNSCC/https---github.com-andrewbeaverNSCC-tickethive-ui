import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import Details from './Details.jsx'

// Pick the current route component to render
const pathname = window.location.pathname
const App = pathname.startsWith('/concerts/') 
  ? <Details concertId={pathname.split('/concerts/')[1] || null} /> 
  : <Home />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {App}
  </StrictMode>
)