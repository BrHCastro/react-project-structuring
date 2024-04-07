import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'
import { LayoutWrapper } from './styles'

export function AppLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  )
}
