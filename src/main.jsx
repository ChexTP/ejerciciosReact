import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contexto from './context/Contexto.jsx'
import { globalContext } from './context/globalContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto>
      <App />
    </Contexto>
  </React.StrictMode>,
)
