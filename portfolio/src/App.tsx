import { Header } from './componets/Header'
import avatar from './assets/avatar.svg'
import ts from './assets/typescript-logo.svg'
import react from './assets/react-logo.svg'
import tailwind from './assets/tailwind-logo.svg'
import next from './assets/next-logo.svg'
import { Article, Section } from './App'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Section>
          <img src={avatar} alt="" />
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

          <a>Baixar CV</a>
          <button>Vamos conversar</button>
        </Section>
      </main>
    </>
  )
}

export default App
