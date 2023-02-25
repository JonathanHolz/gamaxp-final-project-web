import { createContext, ReactNode, useContext, useState } from "react"
import { Cart } from "../components/Cart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type CartProviderProps = {
  children: ReactNode
}

type CartProduct = {
  id: number
  quantity: number
}

type CartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  CartProducts: CartProduct[]
}

const CartContext = createContext({} as CartContext)

export function useCart() {
  return useContext(CartContext)
}
export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [CartProducts, setCartProducts] = useLocalStorage<CartProduct[]>(
    "cart",
    []
  )

  const cartQuantity = CartProducts.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  function getItemQuantity(id: number) {
    return CartProducts.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number) {
    setCartProducts(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: number) {
    setCartProducts(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: number) {
    setCartProducts(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        CartProducts,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
