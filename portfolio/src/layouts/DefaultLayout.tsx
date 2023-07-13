import { Header } from '../componets/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './DefaultLayout'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
