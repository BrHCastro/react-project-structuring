import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface CartItem {
  id: number
  quantity: number
}

interface CartContextType {
  amount: number
  cartItems: CartItem[]
  updateCartItem: ({ id, quantity }: CartItem) => void
  removeCartItem: (id: number) => void
}

const CartContext = createContext<CartContextType>({
  amount: 0,
  cartItems: [],
  updateCartItem: () => {},
  removeCartItem: () => {},
})

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    JSON.parse(localStorage.getItem('@we-movies:cart') ?? '[]'),
  )

  const updateCartItem = useCallback(
    ({ id, quantity }: CartItem) => {
      const existingItem = cartItems.find((item) => item.id === id)

      let updatedQuantity = existingItem
        ? existingItem.quantity + quantity
        : quantity

      if (updatedQuantity < 1) {
        updatedQuantity = 1
      }

      if (existingItem) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: updatedQuantity } : item,
        )
        setCartItems(updatedCartItems)
        localStorage.setItem(
          '@we-movies:cart',
          JSON.stringify(updatedCartItems),
        )
      } else {
        const updatedCartItems = [...cartItems, { id, quantity }]
        setCartItems(updatedCartItems)
        localStorage.setItem(
          '@we-movies:cart',
          JSON.stringify(updatedCartItems),
        )
      }
    },
    [cartItems],
  )

  const removeCartItem = useCallback((id: number) => {
    const items: CartItem[] = JSON.parse(
      localStorage.getItem('@we-movies:cart') ?? '[]',
    )

    const updatedCartItems = items.filter((item) => item.id !== id)
    setCartItems(updatedCartItems)
    localStorage.setItem('@we-movies:cart', JSON.stringify(updatedCartItems))
  }, [])

  const values = useMemo(
    () => ({
      cartItems,
      updateCartItem,
      removeCartItem,
      amount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
    }),
    [cartItems, removeCartItem, updateCartItem],
  )

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export const useCart = () => {
  return useContext(CartContext)
}
