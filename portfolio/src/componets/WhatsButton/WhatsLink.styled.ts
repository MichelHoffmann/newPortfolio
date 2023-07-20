import { styled } from 'styled-components'

export const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: #bfadd980;
  border: 1px solid #bfadd980;
  border-radius: 7px;
  padding: 10px 17px;
  text-decoration: none;
  transition: 300ms;

  &:hover {
    scale: 1.05;
    color: var(--purple-medium);
    border: 1px solid var(--purple-medium);
  }
`
