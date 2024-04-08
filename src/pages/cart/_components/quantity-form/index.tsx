import { useEffect, useState } from 'react'

import { CircleMinusIcon } from '@/components/icons/circle-minus-icon'
import { CirclePlusIcon } from '@/components/icons/circle-plus-icon'
import { useCart } from '@/contexts/use-cart'

import { QuantityFormContainer } from './styles'

interface QuantityFormProps {
  productId: number
}

export function QuantityForm({ productId }: QuantityFormProps) {
  const [amount, setAmount] = useState(0)
  const { updateCartItem, cartItems } = useCart()

  function handleChangeValue(value: number) {
    updateCartItem({
      id: productId,
      quantity: value,
    })
  }

  useEffect(() => {
    setAmount(cartItems.find((item) => item.id === productId)?.quantity ?? 0)
  }, [cartItems, productId])

  return (
    <QuantityFormContainer>
      <button type="button" onClick={() => handleChangeValue(-1)}>
        <CircleMinusIcon />
        <span>Subtrair</span>
      </button>
      <input
        value={amount}
        min="1"
        type="number"
        disabled
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="button" onClick={() => handleChangeValue(1)}>
        <CirclePlusIcon />
        <span>Adicionar</span>
      </button>
    </QuantityFormContainer>
  )
}
