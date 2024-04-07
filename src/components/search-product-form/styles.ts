import styled from 'styled-components'

import { Input } from '../ui/input'

export const InputSearchWrapper = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
  padding-inline: 1rem;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.colors.neutral[300]};

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors['blue-transition']};
    color: ${({ theme }) => theme.colors['official-blue']};
  }
`

export const InputSearch = styled(Input)`
  padding: 0;
  padding-block: 0.9532rem;
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
`
