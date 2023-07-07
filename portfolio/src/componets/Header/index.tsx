import { Div, HeaderComponent } from './Header.style'
import logo from './logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="" />

      <Div>
        <a href="#">Projects</a>
        <a href="#">Contact me</a>
      </Div>
    </HeaderComponent>
  )
}
