import { Container, EachProject } from './ProjectInfo.style'
import styllar from '../../assets/styllar-moveis.png'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function AllProjects() {
  return (
    <Container>
      <div className="gallery-wrapper">
        <div className="gallery">
          <button className="arrow-left">
            <CaretLeft size={20} color="white" />
          </button>

          <EachProject>
            <h3>Styllar Móveis</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </EachProject>
          <EachProject>
            <h3>Styllar Móveis</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </EachProject>
          <EachProject>
            <h3>Styllar Móveis</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </EachProject>
          <EachProject>
            <h3>Styllar Móveis</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </EachProject>
          <button className="arrow-right">
            <CaretRight size={20} color="white" />
          </button>
        </div>
      </div>
    </Container>
  )
}
