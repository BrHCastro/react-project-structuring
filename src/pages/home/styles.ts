import styled from 'styled-components'

import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`

export const MoviesListWrapper = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.5rem;
  }
`

export const MoviesCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;
  color: ${({ theme }) => theme.colors['official-blue']};

  img {
    width: 9.1875rem;
    height: 11.75rem;
  }

  > span {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  > p {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['official-blue']};
  }
`

export const MoviesCardPurchaseButton = styled(Button)`
  width: 100%;
  text-transform: uppercase;

  div {
    display: flex;
    align-items: center;
    gap: 0.2125rem;
  }
`

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 640px) {
    margin-top: 2.5rem;
  }
`
