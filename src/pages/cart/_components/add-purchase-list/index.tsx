import { Fragment } from 'react'

import { TrashIcon } from '@/components/icons/trash-icon'
import { OnlyIconButton } from '@/components/only-icon-button'
import { Separator } from '@/components/ui/separator'
import { currencyFormatter } from '@/utils/currency-formatter'

import { CurrencyAmount } from '../currency-amount'
import { PurchaseButton } from '../purchase-button'
import { QuantityForm } from '../quantity-form'
import {
  AddPurchaseListContainer,
  AddPurchaseListFooter,
  AddPurchaseListGrid,
  AddPurchaseListHead,
  AddPurchaseListItem,
} from './styles'

interface AddPurchaseListProps {
  products: {
    id: string
    image: string
    price: number
    title: string
  }[]
}

export function AddPurchaseList({ products }: AddPurchaseListProps) {
  return (
    <AddPurchaseListContainer>
      <AddPurchaseListGrid>
        <AddPurchaseListHead>Product</AddPurchaseListHead>
        <AddPurchaseListHead>Qtd</AddPurchaseListHead>
        <AddPurchaseListHead>Subtotal</AddPurchaseListHead>
      </AddPurchaseListGrid>
      <AddPurchaseListGrid>
        {products.map((product) => {
          return (
            <Fragment key={product.id}>
              <AddPurchaseListItem>
                <img src={product.image} alt={product.title} />
                <div>
                  <span>{product.title}</span>
                  <CurrencyAmount>
                    {currencyFormatter(product.price)}
                  </CurrencyAmount>
                </div>
              </AddPurchaseListItem>

              <AddPurchaseListItem>
                <QuantityForm />
              </AddPurchaseListItem>

              <AddPurchaseListItem>
                <CurrencyAmount>
                  {currencyFormatter(product.price)}
                </CurrencyAmount>
              </AddPurchaseListItem>

              <AddPurchaseListItem>
                <OnlyIconButton title="remover">
                  <TrashIcon />
                  <span>Remover</span>
                </OnlyIconButton>
              </AddPurchaseListItem>
            </Fragment>
          )
        })}
      </AddPurchaseListGrid>

      <Separator />

      <AddPurchaseListFooter>
        <PurchaseButton>Finalizar pedido</PurchaseButton>

        <div>
          <small>Total</small>
          <span>{currencyFormatter(29.9)}</span>
        </div>
      </AddPurchaseListFooter>
    </AddPurchaseListContainer>
  )
}
