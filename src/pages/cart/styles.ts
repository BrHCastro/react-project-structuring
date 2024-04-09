import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
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
