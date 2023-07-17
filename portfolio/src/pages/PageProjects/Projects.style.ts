import { styled } from 'styled-components'

export const ProjectsContainer = styled.section`
  padding: 30px;
  color: white;
  h1 {
    font-size: 1.7rem;
    margin-bottom: 30px;
  }
  p {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: flex-end;
    color: rgba(114, 66, 179, 0.7);
  }

  .divWhats {
    display: flex;
    justify-content: center;
    a.whats {
      color: #bfadd980;
      border: 1px solid;
      border-radius: 7px;
      padding: 10px;
      font-weight: bold;
    }

    a.whats:hover {
      color: var(--purple-dark);
    }
  }
`
