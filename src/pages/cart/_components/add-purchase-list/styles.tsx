import styled from 'styled-components'

export const AddPurchaseListContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 24px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const AddPurchaseListGrid = styled.div`
  display: grid;
  grid-template-columns: 17.5rem 1fr 1fr 1.125rem;

  row-gap: 1rem;
`

export const AddPurchaseListHead = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral[400]};
  text-align: start;
  text-transform: uppercase;
`

export const AddPurchaseListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 5.6875rem;
    height: 7.125rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors['official-blue']};
    }
  }
`

export const AddPurchaseListFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    small {
      font-size: 0.875rem;
      font-weight: bold;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.neutral[400]};
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors['official-blue']};
    }
  }
`
