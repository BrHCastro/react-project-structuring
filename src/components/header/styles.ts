import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 1.5rem;
`

export const CartContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      display: none;
      font-weight: 600;
      font-size: 0.875rem;

      @media (min-width: 640px) {
        display: block;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.neutral[400]};
      font-weight: 600;
      font-size: 0.75rem;
    }
  }
`
