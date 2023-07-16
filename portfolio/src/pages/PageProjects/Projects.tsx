import { ProjectInfo } from '../../componets/ProjectInfo'
import { ProjectsContainer } from './Projects.style'

export function Projects() {
  const projects = [
    {
      name: 'Styllar Móveis',
      id: 1,
      about:
        'Projeto freelancer feito para uma marcenaria com o objetivo de fazer com o cliente tivesse um portifolio online contendo todos os seus projetos, o ajudando com seus clientes.',
      techs: ['React', 'Typescript', 'Styled Components'],
      img: '../../assets/styllar-moveis.png',
    },
    {
      name: 'Best Player',
      id: 2,
      about:
        'Projeto openSource feito para a comunidade gamer com o objetivo de reunir gamers do mundo todo permitindo que eles se ajudem, tirando duvidas e dando dicas uns aos outros.',
      techs: ['React', 'Typescript', 'Tailwind'],
      img: '../../assets/styllar-moveis.png',
    },
  ]

  return (
    <ProjectsContainer>
      <h1>
        Trabalhos e <br />
        projetos
      </h1>
      {projects.map((project) => {
        return <ProjectInfo key={project.id} {...project} />
      })}
    </ProjectsContainer>
  )
}
