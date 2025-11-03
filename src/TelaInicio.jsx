import './TelaInicio.css'
import robo from './assets/robo.png'

export default function TelaInicio({ onEntrar }) {
    return (
        <div className="tela-inicio">
            <div className="card-inicio">
                <img src={robo} alt="Logo Auxigal" className="logo-inicio" />
                <h1>🤖 Bem-vindo ao Chat Auxigal!</h1>
                <p>Sua assistente virtual está pronta para conversar com você.</p>
                <button className="botao-inicio" onClick={onEntrar}>
                    Entrar no chat 💬
                </button>
            </div>
            <footer className="footer-inicio">
                <p>Desenvolvido por: Vitoria Moreira Pires</p>
                <small>© 2025 Todos os direitos reservados</small>
            </footer>
        </div>
  )
}
