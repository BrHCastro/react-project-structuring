import { AppLogo } from '../app-logo'
import { BagIcon } from '../icons/bag-icon'
import { CartContainer, CartItemLink, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <AppLogo to="/">WeMovies</AppLogo>

      <CartContainer>
        <div>
          <span>Meu Carrinho</span>
          <CartItemLink to="/cart">0 items</CartItemLink>
        </div>

        <BagIcon />
      </CartContainer>
    </HeaderContainer>
  )
}
