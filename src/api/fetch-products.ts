import { api } from '@/lib/axios'

export interface FetchProductsRequest {
  search: string | null
}

export interface FetchProductsResponse {
  id: string
  image: string
  price: number
  title: string
}

export async function fetchProducts({ search }: FetchProductsRequest) {
  const normalizeText = (text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase()
  }

  const response = await api.get<FetchProductsResponse[]>('/products')

  if (!response.data) {
    return []
  }

  if (search !== null) {
    return response.data.filter((product) =>
      normalizeText(product.title).includes(normalizeText(search)),
    )
  }

  return response.data
}
