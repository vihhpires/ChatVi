import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TelaInicio from './TelaInicio.jsx' 
import './TelaInicio.css'                 
import './App.css'
import './transicao.css'                  

function Root() {
  const [mostrarChat, setMostrarChat] = useState(false)
  const [transicao, setTransicao] = useState(false)

  const entrarNoChat = () => {
    setTransicao(true)
    setTimeout(() => {
      setMostrarChat(true)
      setTransicao(false)
    }, 700) // tempo da animação
  }

  return (
    <div className={`container-geral ${transicao ? 'fade-out' : 'fade-in'}`}>
      {mostrarChat ? <App /> : <TelaInicio onEntrar={entrarNoChat} />}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('raiz')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
