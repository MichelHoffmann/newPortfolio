import { styled } from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 30px;
  }

  div {
    color: white;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 2.187rem;
  }

  span {
    color: var(--purple-medium);
  }

  h3 {
    font-size: 1.5rem;
  }
`

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  gap: 25px;

  div {
    width: 45px;
    height: 45px;
    border-radius: 7px;
    border: 2px solid var(--purple-dark);
    background-color: var(--blue-gray);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
      margin: 0;
    }
  }
`
