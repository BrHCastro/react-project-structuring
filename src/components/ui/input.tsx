import { ComponentProps } from 'react'
import styled from 'styled-components'

interface InputProps extends ComponentProps<'input'> {}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['official-blue']};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
`
