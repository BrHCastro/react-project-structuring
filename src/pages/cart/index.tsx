import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'

import { fetchProducts } from '@/api/fetch-products'
import { useMediaQuery } from '@/hooks/use-media-query'

import { AddPurchaseList } from './_components/add-purchase-list'
import { AddPurchaseListMobile } from './_components/add-purchase-list-mobile'
import { CartContainer } from './styles'

export function Cart() {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetchProducts({
        search: null,
      }),
  })

  const productsFiltered = useMemo(() => {
    return products ? products.slice(1, 2) : null
  }, [products])

  if (!productsFiltered) {
    return null
  }

  return (
    <CartContainer>
      <Helmet title="Cart" />

      {isDesktop ? (
        <AddPurchaseList products={productsFiltered} />
      ) : (
        <AddPurchaseListMobile products={productsFiltered} />
      )}
    </CartContainer>
  )
}
