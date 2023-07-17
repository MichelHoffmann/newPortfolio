import { styled } from 'styled-components'

export const EachProject = styled.article`
  min-width: 300px;
  background-color: var(--blue-gray);
  border-radius: 7px;
  border: 2px solid var(--purple-dark);
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h3 {
    font-size: 1rem;
  }

  p {
    color: var(--gray-200);
    text-align: center;
  }

  .techs {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .techs p {
    min-width: 100px;
    max-width: 170px;
    padding: 5px;
    font-weight: bold;
    color: var(--purple-dark);
    background-color: var(--tech);
    border-radius: 7px;
  }

  img {
    min-width: 250px;
    max-width: 80%;
    border-radius: 10px;
  }
`

export const Container = styled.div``
export const DivProjectsWrapper = styled.div``
export const DivProjects = styled.div``
