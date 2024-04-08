import { ComponentProps } from 'react'
import styled from 'styled-components'

interface SeparatorProps extends ComponentProps<'div'> {}

export const Separator = styled.div<SeparatorProps>`
  width: 100%;
  height: 1px;

  background: ${({ theme }) => theme.colors.neutral[400]};
`
