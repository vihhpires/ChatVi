import './App.css'
import robo from './assets/robo.png'

export default function App() {
  return (
    <div className="app">
      <div className="chat-container">
      
        <header>
          <h1>🤖 Chatbot</h1>
        </header>

        <main className="todas-mensagens">
          <div className="linha-mensagem mensagem-bot">
            <img className="avatar" src={robo} alt="Bot" />
            <div className="bolha-mensagem">🤖 Olá, sou a Auxigal</div>
          </div>
          <div className="linha-mensagem mensagem-usuario">
            <div className="bolha-mensagem">Oi! Quero testar o chat.</div>
          </div>
          <div className="linha-mensagem mensagem-bot">
            <img className="avatar" src={robo} alt="Bot" />
            <div className="bolha-mensagem">Tudo bem! Em que posso ajudar? 😊</div>
          </div>
          <div className="linha-mensagem mensagem-usuario">
            <div className="bolha-mensagem">Queria uma receita simples de bolo de laranja 🍊</div>
          </div>
          <div className="linha-mensagem mensagem-bot">
            <img className="avatar" src={robo} alt="Bot" />
            <div className="bolha-mensagem">Claro, aguarde só um instante...</div>
          </div>
        </main>

        <div className="composer">
          <textarea placeholder="Digite sua mensagem..." rows={1} />
          <button className="botao-enviar">Enviar</button>
        </div>

        <footer>
          <h2>Desenvolvido por: Vitoria Moreira Pires</h2>
          <h5>© 2025 Todos os direitos reservados</h5>
        </footer>
      </div>
    </div>
  )
}
