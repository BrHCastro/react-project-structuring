import { Fragment } from 'react'

import { TrashIcon } from '@/components/icons/trash-icon'
import { OnlyIconButton } from '@/components/only-icon-button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/contexts/use-cart'
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
  onFinishOrder: () => void
  products: {
    id: string
    image: string
    price: number
    title: string
    amount: number
  }[]
}

export function AddPurchaseList({
  products,
  onFinishOrder,
}: AddPurchaseListProps) {
  const { removeCartItem } = useCart()
  const total = products.reduce(
    (acc, product) => acc + product.price * product.amount,
    0,
  )

  return (
    <AddPurchaseListContainer>
      <AddPurchaseListGrid>
        <AddPurchaseListHead>Product</AddPurchaseListHead>
        <AddPurchaseListHead>Qtd</AddPurchaseListHead>
        <AddPurchaseListHead>Subtotal</AddPurchaseListHead>
      </AddPurchaseListGrid>
      <AddPurchaseListGrid>
        {products.map((product) => {
          const subtotal = product.price * product.amount

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
                <QuantityForm productId={Number(product.id)} />
              </AddPurchaseListItem>

              <AddPurchaseListItem>
                <CurrencyAmount>{currencyFormatter(subtotal)}</CurrencyAmount>
              </AddPurchaseListItem>

              <AddPurchaseListItem>
                <OnlyIconButton
                  title="remover"
                  type="button"
                  onClick={() => removeCartItem(Number(product.id))}
                >
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
        <PurchaseButton onClick={onFinishOrder}>
          Finalizar pedido
        </PurchaseButton>

        <div>
          <small>Total</small>
          <span>{currencyFormatter(total)}</span>
        </div>
      </AddPurchaseListFooter>
    </AddPurchaseListContainer>
  )
}
