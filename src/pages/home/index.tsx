import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { fetchProducts } from '@/api/fetch-products'
import { CartIcon } from '@/components/icons/cart-icon'
import { Loading } from '@/components/loading'
import { SearchProductForm } from '@/components/search-product-form'
import { useCart } from '@/contexts/use-cart'
import { currencyFormatter } from '@/utils/currency-formatter'

import { EmptyState } from './_components/empty-state'
import {
  HomeContainer,
  LoadingContainer,
  MoviesCard,
  MoviesCardPurchaseButton,
  MoviesListWrapper,
} from './styles'

export function Home() {
  const { updateCartItem, cartItems } = useCart()
  const [params] = useSearchParams()

  const {
    data: products,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['products', params.get('search')],
    queryFn: () =>
      fetchProducts({
        search: params.get('search'),
      }),
  })

  function handleMoveToCart(id: number, quantity: number) {
    updateCartItem({
      id,
      quantity,
    })
  }

  const productFormatted = useMemo(() => {
    if (cartItems.length === 0) {
      return products?.map((product) => {
        return {
          ...product,
          amount: 0,
        }
      })
    }

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

  if (isFetching) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    )
  }

  return (
    <HomeContainer>
      <Helmet title="Home" />

      {isError ||
      (!isFetching && products?.length === 0 && !params.get('search')) ? (
        <EmptyState />
      ) : (
        <>
          <SearchProductForm />

          <MoviesListWrapper>
            {productFormatted?.map((item) => {
              return (
                <MoviesCard key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                  <p>{currencyFormatter(item.price)}</p>
                  <MoviesCardPurchaseButton
                    $variant={item.amount > 0 ? 'success' : 'default'}
                    onClick={() => handleMoveToCart(Number(item.id), 1)}
                  >
                    <div>
                      <CartIcon />
                      <span>{item.amount}</span>
                    </div>
                    <span>Adicionar ao carrinho</span>
                  </MoviesCardPurchaseButton>
                </MoviesCard>
              )
            })}
          </MoviesListWrapper>
        </>
      )}
    </HomeContainer>
  )
}
