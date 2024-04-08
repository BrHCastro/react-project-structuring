import styled from 'styled-components'

import { Box } from '@/components/ui/box'

import { PurchaseButton } from '../purchase-button'

export const AddPurchaseListMobileContainer = styled(Box)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const AddPurchaseListMobileItem = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 4rem;
    height: 5.125rem;
  }

  div.product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    div.product-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      span {
        font-weight: 700;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors['official-blue']};
      }
    }
  }

  div.product-info-footer {
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
      text-align: right;

      span {
        font-size: 0.75rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.neutral[400]};
        text-transform: uppercase;
      }
    }
  }
`

export const AddPurchaseListMobileFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.neutral[400]};
      text-transform: uppercase;

      & + span {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors['official-blue']};
      }
    }
  }
`

export const PurchaseButtonMobile = styled(PurchaseButton)`
  width: 100%;
  height: 2.5rem;
  font-size: 0.875rem;
`
