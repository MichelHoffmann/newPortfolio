import { styled } from 'styled-components'

export const DivProject = styled.article`
  min-width: 300px;
  background-color: var(--blue-gray);
  border-radius: 7px;
  border: 2px solid var(--purple-dark);
  padding: 15px 25px;

  h3 {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  p {
    color: var(--gray-200);
    text-align: center;
  }

  .techs {
    margin-top: 15px;
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
`
