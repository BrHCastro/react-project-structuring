import { useCart } from '@/contexts/use-cart'

import { AppLogo } from '../app-logo'
import { BagIcon } from '../icons/bag-icon'
import { CartContainer, CartItemLink, HeaderContainer } from './styles'

export function Header() {
  const { amount } = useCart()

  return (
    <HeaderContainer>
      <AppLogo to="/">WeMovies</AppLogo>

      <CartContainer>
        <div>
          <span>Meu Carrinho</span>
          <CartItemLink to="/cart">{amount} items</CartItemLink>
        </div>

        <BagIcon />
      </CartContainer>
    </HeaderContainer>
  )
}
