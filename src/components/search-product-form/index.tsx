import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { SearchIcon } from '../icons/search-icon'
import { InputSearch, InputSearchWrapper, SearchButton } from './styles'

const formSearchSchema = z.object({
  search: z.string().nullable(),
})

type FormSearchSchema = z.infer<typeof formSearchSchema>

export function SearchProductForm() {
  const [, setSearchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSearchSchema>({
    resolver: zodResolver(formSearchSchema),
  })

  function handleSearch({ search }: FormSearchSchema) {
    setSearchParams((state) => {
      if (search) {
        state.set('search', search)
      } else {
        state.delete('search')
      }

      return state
    })
  }

  return (
    <InputSearchWrapper
      onSubmit={handleSubmit(handleSearch)}
      onBlur={handleSubmit(handleSearch)}
    >
      <InputSearch
        placeholder="Buscar filme pelo nome"
        {...register('search')}
      />
      <SearchButton type="submit" disabled={!!errors.search}>
        <SearchIcon />
      </SearchButton>
    </InputSearchWrapper>
  )
}
