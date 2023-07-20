import { styled } from 'styled-components'

export const EachProject = styled.article`
  width: 300px;
  padding: 15px 25px;
  background-color: var(--blue-gray);
  border-radius: 7px;
  border: 2px solid var(--purple-dark);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;

  h3 {
    font-size: 1.2rem;
    color: var(--purple-ligth);
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
    width: 100%;
    max-width: 350px;
    aspect-ratio: 16/9;
    border-radius: 10px;
  }
`
