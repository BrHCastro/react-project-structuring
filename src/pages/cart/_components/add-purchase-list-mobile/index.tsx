import { TrashIcon } from '@/components/icons/trash-icon'
import { OnlyIconButton } from '@/components/only-icon-button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/contexts/use-cart'
import { currencyFormatter } from '@/utils/currency-formatter'

import { CurrencyAmount } from '../currency-amount'
import { QuantityForm } from '../quantity-form'
import {
  AddPurchaseListMobileContainer,
  AddPurchaseListMobileFooter,
  AddPurchaseListMobileItem,
  PurchaseButtonMobile,
} from './styles'

interface AddPurchaseListMobileProps {
  onFinishOrder: () => void
  products: {
    id: string
    image: string
    price: number
    title: string
    amount: number
  }[]
}

export function AddPurchaseListMobile({
  products,
  onFinishOrder,
}: AddPurchaseListMobileProps) {
  const { removeCartItem } = useCart()
  const total = products.reduce(
    (acc, product) => acc + product.price * product.amount,
    0,
  )

  return (
    <AddPurchaseListMobileContainer>
      <div>
        {products.map((product) => {
          const subtotal = product.price * product.amount
          return (
            <AddPurchaseListMobileItem key={product.id}>
              <img src={product?.image} alt={product?.title} />
              <div className="product-info">
                <div className="product-info-header">
                  <span>{product?.title}</span>
                  <CurrencyAmount>
                    {currencyFormatter(product.price)}
                  </CurrencyAmount>
                  <OnlyIconButton
                    title="remover"
                    type="button"
                    onClick={() => removeCartItem(Number(product.id))}
                  >
                    <TrashIcon />
                    <span>Remover</span>
                  </OnlyIconButton>
                </div>
                <div className="product-info-footer">
                  <QuantityForm productId={Number(product.id)} />
                  <div>
                    <span>Subtotal</span>
                    <CurrencyAmount>
                      {currencyFormatter(subtotal)}
                    </CurrencyAmount>
                  </div>
                </div>
              </div>
            </AddPurchaseListMobileItem>
          )
        })}
      </div>

      <Separator />

      <AddPurchaseListMobileFooter>
        <div>
          <span>Total</span>
          <span>{currencyFormatter(total)}</span>
        </div>

        <PurchaseButtonMobile type="button" onClick={onFinishOrder}>
          Finalizar pedido
        </PurchaseButtonMobile>
      </AddPurchaseListMobileFooter>
    </AddPurchaseListMobileContainer>
  )
}
