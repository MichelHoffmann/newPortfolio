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

  div.baixar-cv {
    min-width: 290px;
    min-height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 20px;

    a,
    a.whats {
      font-size: 1rem;
      color: #bfadd980;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      text-decoration: none;
    }

    a.whats {
      font-family: 'Inter';
      background-color: var(--gray-300);
      border: 1px solid #bfadd980;
      border-radius: 7px;
      padding: 10px;
      gap: 5px;
    }
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
