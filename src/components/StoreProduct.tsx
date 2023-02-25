import { useCart } from "../context/CartContext"
import { formatCurrency } from "../util/formatCurrency"

type StoreProductProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreProduct({ id, name, price, imgUrl }: StoreProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart()
  const quantity = getItemQuantity(id)

  return (
    <div>
      <img
        
        src={imgUrl}
        height="200px"
      />
      <div>
        <div>
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </div>
        <div>
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div>
              <div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
