import { useCart } from '@/contexts/use-cart'

import { AppLogo } from '../app-logo'
import { BagIcon } from '../icons/bag-icon'
import { CartContainer, HeaderContainer } from './styles'

export function Header() {
  const { amount } = useCart()

  return (
    <HeaderContainer>
      <AppLogo to="/">WeMovies</AppLogo>

      <CartContainer to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{amount} items</span>
        </div>

        <BagIcon />
      </CartContainer>
    </HeaderContainer>
  )
}
