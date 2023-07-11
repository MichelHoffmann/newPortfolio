import { Header } from './componets/Header'
import avatar from './assets/avatar.svg'
import ts from './assets/typescript-logo.svg'
import react from './assets/react-logo.svg'
import tailwind from './assets/tailwind-logo.svg'
import next from './assets/next-logo.svg'
import CurriculoMichel from './assets/curriculo-michel.pdf'
import { Article, Section } from './App'
import { ArrowLineDown, WhatsappLogo } from 'phosphor-react'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Section>
          <img src={avatar} alt="desenho do michel com oculos e blusa preta" />
          <div>
            <p>OLÁ 👋🏽 EU SOU O</p>
            <h1>
              MICHEL <br />
              <span>HOFFMANN</span>
            </h1>
            <h3>Front-end Developer</h3>
          </div>
          <Article>
            <div>
              <img src={ts} alt="" />
            </div>

            <div>
              <img src={react} alt="" />
            </div>

            <div>
              <img src={tailwind} alt="" />
            </div>

            <div>
              <img src={next} alt="" />
            </div>
          </Article>

          <div className="baixar-cv">
            <a href={CurriculoMichel} download>
              Baixar CV <ArrowLineDown />
            </a>
            <a
              href="https://wa.me/5568981141671"
              className="whats"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappLogo />
              Vamos conversar
            </a>
          </div>
        </Section>
      </main>
    </>
  )
}

export default App
