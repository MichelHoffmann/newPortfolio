import { styled } from 'styled-components'

export const ContactContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  background-color: var(--blue-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 120px;
  gap: 50px;

  border: 2px solid var(--purple-dark);
  border-radius: 7px;
  margin-block: 40px;

  h1 {
    color: var(--purple-medium);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a {
      width: 207px;
      text-align: center;
      padding-block: 13px;
      font-size: 1.125rem;
      font-weight: bold;
      text-decoration: none;
      color: var(--purple-dark);
      background-color: var(--tech);
      border-radius: 7px;
      transition: 250ms;
    }

    a:hover {
      scale: 1.1;
    }
  }
`
