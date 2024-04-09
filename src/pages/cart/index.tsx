import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { getSelectedProducts } from '@/api/get-selected-products'
import { Loading } from '@/components/loading'
import { useCart } from '@/contexts/use-cart'
import { useMediaQuery } from '@/hooks/use-media-query'

import { AddPurchaseList } from './_components/add-purchase-list'
import { AddPurchaseListMobile } from './_components/add-purchase-list-mobile'
import { EmptyState } from './_components/empty-state'
import { CartContainer, LoadingContainer } from './styles'

export function Cart() {
  const [storage] = useState(() => localStorage.getItem('@we-movies:cart'))
  const { cartItems, removeCartItem } = useCart()

  const isDesktop = useMediaQuery('(min-width: 640px)')
  const navigate = useNavigate()

  const {
    data: products,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['products-cart', storage],
    queryFn: () =>
      getSelectedProducts({
        ids: cartItems.map((item) => item.id),
      }),
  })

  const productFormatted = useMemo(() => {
    return products
      ?.map((product) => {
        const amount = cartItems.find(
          (item) => item.id === Number(product.id),
        )?.quantity

        return {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          amount: amount ?? 0,
        }
      })
      .filter((product) => product.amount > 0)
  }, [cartItems, products])

  function handleFinishedOrder() {
    cartItems.forEach((item) => {
      removeCartItem(item.id)
    })

    navigate('/success')
  }

  return (
    <CartContainer>
      <Helmet title="Cart" />

      {isFetching ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : isError || productFormatted?.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {isDesktop ? (
            <AddPurchaseList
              products={productFormatted ?? []}
              onFinishOrder={handleFinishedOrder}
            />
          ) : (
            <AddPurchaseListMobile
              products={productFormatted ?? []}
              onFinishOrder={handleFinishedOrder}
            />
          )}
        </>
      )}
    </CartContainer>
  )
}
