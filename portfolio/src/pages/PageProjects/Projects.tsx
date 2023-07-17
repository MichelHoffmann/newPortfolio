import { ArrowRight } from '@phosphor-icons/react'
import { AllProjects } from '../../componets/ProjectInfo'
import { ProjectsContainer } from './Projects.style'
import { WhatsappLogo } from 'phosphor-react'

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>
        Trabalhos e <br />
        projetos
      </h1>
      <AllProjects />
      <p>
        Veja mais <ArrowRight />
      </p>
      <div className="divWhats">
        <a
          href="https://wa.me/5568981141671"
          className="whats"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappLogo size={18} /> Vamos conversar
        </a>
      </div>
    </ProjectsContainer>
  )
}
