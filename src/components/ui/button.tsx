import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps extends ComponentProps<'button'> {
  $variant?: 'default' | 'success'
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme, $variant = 'default' }) => {
    switch ($variant) {
      case 'success':
        return css`
          background: ${theme.colors.success};
        `
      default:
        return css`
          background: ${theme.colors['blue-transition']};
          transition: ease-out 300ms;
          &:hover {
            background: ${theme.colors['blue-transition:hover']};
          }
        `
    }
  }}

  border: none;
  border-radius: 4px;
  padding-inline: 0.5rem;
  padding-block: 0.6875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
