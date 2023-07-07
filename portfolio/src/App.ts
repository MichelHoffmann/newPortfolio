import { styled } from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 286px;
    height: 309;

    margin-bottom: 30px;
  }

  article {
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

export const Article = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  div {
    width: 45px;
    height: 45px;
    border-radius: 7px;
    border: 2px solid var(--purple-dark);
    background-color: var(--blue-gray);

    padding: 3px;

    img {
      width: 35px;
      height: 35px;
    }
  }
`
