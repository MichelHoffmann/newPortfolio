import { styled } from 'styled-components'

export const EachProject = styled.article`
  min-width: 285px;
  max-width: 350px;
  padding: 15px 25px;
  background-color: var(--blue-gray);
  border-radius: 7px;
  border: 2px solid var(--purple-dark);

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
    margin: 0;
  }

  .techs {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .techs p {
    display: block;
    min-width: 100px;
    max-width: 170px;
    padding: 5px;
    color: var(--purple-dark);
    background-color: var(--tech);
    border-radius: 7px;
    font-weight: bold;
    text-align: center;
  }

  img {
    min-width: 240px;
    max-width: 80%;
    border-radius: 10px;
  }
`
