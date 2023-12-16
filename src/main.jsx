import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css'
import { BuscadorPeliculas } from './BuscadorPeliculas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPeliculas></BuscadorPeliculas>
  </React.StrictMode>,
)
