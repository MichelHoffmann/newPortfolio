import { DivProject } from './ProjectInfo.style'

interface ProjectsObject {
  name: string
  about: string
  techs: string[]
  img: string
}
export function ProjectInfo(props: ProjectsObject) {
  return (
    <DivProject>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <div className="techs">
        <p>{props.techs[1]}</p>
        <p>{props.techs[2]}</p>
      </div>
      <img src={props.img} alt="" />
    </DivProject>
  )
}
