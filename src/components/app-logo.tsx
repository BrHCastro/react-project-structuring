import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AppLogo = styled(Link)`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
`
