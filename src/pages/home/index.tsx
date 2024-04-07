import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { fetchProducts } from '@/api/fetch-products'
import { CartIcon } from '@/components/icons/cart-icon'
import { SearchProductForm } from '@/components/search-product-form'

import {
  HomeContainer,
  MoviesCard,
  MoviesCardPurchaseButton,
  MoviesListWrapper,
} from './styles'

export function Home() {
  const [params] = useSearchParams()

  const { data: products } = useQuery({
    queryKey: ['products', params.get('search')],
    queryFn: () =>
      fetchProducts({
        search: params.get('search'),
      }),
  })

  return (
    <HomeContainer>
      <Helmet title="Home" />

      <SearchProductForm />

      <MoviesListWrapper>
        {products?.map((item) => {
          return (
            <MoviesCard key={item.id}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.price)}
              </p>
              <MoviesCardPurchaseButton>
                <div>
                  <CartIcon />
                  <span>0</span>
                </div>
                <span>Adicionar ao carrinho</span>
              </MoviesCardPurchaseButton>
            </MoviesCard>
          )
        })}
      </MoviesListWrapper>
    </HomeContainer>
  )
}
