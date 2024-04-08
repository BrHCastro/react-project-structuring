import { api } from '@/lib/axios'

export interface GetSelectedProductsRequest {
  ids: number[]
}

export interface GetSelectedProductsResponse {
  id: string
  image: string
  price: number
  title: string
}

export async function getSelectedProducts({ ids }: GetSelectedProductsRequest) {
  const response = await api.get<GetSelectedProductsResponse[]>('/products')

  const result = response.data.filter((product) =>
    ids.includes(Number(product.id)),
  )

  return result
}
