import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { getSelectedProducts } from '@/api/get-selected-products'
import { useCart } from '@/contexts/use-cart'
import { useMediaQuery } from '@/hooks/use-media-query'

import { AddPurchaseList } from './_components/add-purchase-list'
import { AddPurchaseListMobile } from './_components/add-purchase-list-mobile'
import { EmptyState } from './_components/empty-state'
import { CartContainer } from './styles'

export function Cart() {
  const { cartItems, amount, removeCartItem } = useCart()

  const isDesktop = useMediaQuery('(min-width: 640px)')
  const navigate = useNavigate()

  const { data: products } = useQuery({
    queryKey: ['products-cart', amount],
    queryFn: () =>
      getSelectedProducts({
        ids: cartItems.map((item) => item.id),
      }),
  })

  const productFormatted = useMemo(() => {
    return products?.map((product) => {
      return {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        amount:
          cartItems.find((item) => item.id === Number(product.id))?.quantity ??
          0,
      }
    })
  }, [cartItems, products])

  if (!productFormatted) {
    return null
  }

  function handleFinishedOrder() {
    cartItems.forEach((item) => {
      removeCartItem(item.id)
    })

    navigate('/success')
  }

  return (
    <CartContainer>
      <Helmet title="Cart" />

      {productFormatted.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {isDesktop ? (
            <AddPurchaseList
              products={productFormatted}
              onFinishOrder={handleFinishedOrder}
            />
          ) : (
            <AddPurchaseListMobile
              products={productFormatted}
              onFinishOrder={handleFinishedOrder}
            />
          )}
        </>
      )}
    </CartContainer>
  )
}
