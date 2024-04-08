import { TrashIcon } from '@/components/icons/trash-icon'
import { OnlyIconButton } from '@/components/only-icon-button'
import { Separator } from '@/components/ui/separator'
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
  products: {
    id: string
    image: string
    price: number
    title: string
  }[]
}

export function AddPurchaseListMobile({
  products,
}: AddPurchaseListMobileProps) {
  return (
    <AddPurchaseListMobileContainer>
      <div>
        {products.map((product) => {
          return (
            <AddPurchaseListMobileItem key={product.id}>
              <img src={product?.image} alt={product?.title} />
              <div className="product-info">
                <div className="product-info-header">
                  <span>{product?.title}</span>
                  <CurrencyAmount>
                    {currencyFormatter(product.price)}
                  </CurrencyAmount>
                  <OnlyIconButton title="remover">
                    <TrashIcon />
                    <span>Remover</span>
                  </OnlyIconButton>
                </div>
                <div className="product-info-footer">
                  <QuantityForm />
                  <div>
                    <span>Subtotal</span>
                    <CurrencyAmount>{currencyFormatter(29.9)}</CurrencyAmount>
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
          <span>R$ 29,90</span>
        </div>

        <PurchaseButtonMobile>Finalizar pedido</PurchaseButtonMobile>
      </AddPurchaseListMobileFooter>
    </AddPurchaseListMobileContainer>
  )
}
