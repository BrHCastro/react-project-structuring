import { CircleMinusIcon } from '@/components/icons/circle-minus-icon'
import { CirclePlusIcon } from '@/components/icons/circle-plus-icon'

import { QuantityFormContainer } from './styles'

export function QuantityForm() {
  return (
    <QuantityFormContainer>
      <button>
        <CircleMinusIcon />
        <span>Subtrair</span>
      </button>
      <input />
      <button>
        <CirclePlusIcon />
        <span>Adicionar</span>
      </button>
    </QuantityFormContainer>
  )
}
