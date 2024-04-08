import styled from 'styled-components'

import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'

import { SuccessStateFigure } from './_components/success-state-figure'

export const SuccessContainer = styled(Box)`
  width: 100%;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;

  span {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['official-blue']};
  }
`

export const SuccessFigure = styled(SuccessStateFigure)`
  width: 14.875rem;
  height: 15.4825rem;

  @media (min-width: 640px) {
    width: 18.435rem;
    height: 19.1875rem;
  }
`

export const SuccessRefreshButton = styled(Button)`
  width: 10.8125rem;
  height: 2.5rem;
  text-transform: uppercase;
`
