import { ComponentProps } from 'react'
import styled from 'styled-components'

interface CurrencyAmount extends ComponentProps<'p'> {}

export const CurrencyAmount = styled.p<CurrencyAmount>`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['official-blue']};
`
