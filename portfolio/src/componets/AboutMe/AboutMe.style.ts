import { styled } from 'styled-components'

export const AboutMeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  img {
    width: 350px;
  }
`

export const MyInformations = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color: white;
  font-weight: 400;
  text-align: center;

  h1 {
    margin-top: 4px;
    font-size: 2.3rem;
    line-height: 0.9;
    font-weight: 600;
    span {
      color: var(--purple-medium);
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 7px;
  }

  div.baixar-cv {
    margin-block: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a {
      font-size: 1rem;
      font-weight: 400;
      color: #bfadd980;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      transition: 300ms;
    }

    a.whats {
      color: #bfadd980;
      border: 1px solid;
      border-radius: 7px;
      padding: 10px;
    }

    a:hover {
      color: var(--purple-medium);
      scale: 1.05;
    }
  }

  p.text {
    width: 70%;
  }

  a.projects {
    margin-block: 20px;
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    background-color: var(--purple-dark);
    border: 2px solid var(--purple-dark);
    border-radius: 20px;
    padding: 10px 20px;
    transition: 150ms;
  }

  a.projects:hover {
    box-shadow: 0px 0px 23px -2px rgba(114, 66, 179, 1);
    background-color: var(--gray-300);
  }
`

export const TechContainer = styled.article`
  display: flex;
  gap: 25px;
`

export const TechIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 7px;
  border: 2px solid var(--purple-dark);
  background-color: var(--blue-gray);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 75%;
  }
`
