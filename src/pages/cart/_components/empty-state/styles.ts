import styled from 'styled-components'

import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'

export const EmptyStateContainer = styled(Box)`
  width: 100%;
  height: 100%;
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

  div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const EmptyStateSeparator = styled.div`
  width: 100%;
  max-width: 447px;
  height: 1.36px;
  background: ${({ theme }) => theme.colors['official-blue']};
`
export const EmptyStateRefreshButton = styled(Button)`
  width: 10.8125rem;
  height: 2.5rem;
`
