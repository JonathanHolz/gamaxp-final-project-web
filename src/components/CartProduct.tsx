import { useCart } from "../context/CartContext"
import StoreProducts from "../data/items.json"
import { formatCurrency } from "../util/formatCurrency"

type CartProductProps = {
  id: number
  quantity: number
}

export function CartProduct({ id, quantity }: CartProductProps) {
  const { removeFromCart } = useCart()
  const item = StoreProducts.find(i => i.id === id)
  if (item == null) return null

  return (
    <div>
      <img
        src={item.imgUrl}
      />
      <div>
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span>
              x{quantity}
            </span>
          )}
        </div>
        <div>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <button
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  )
}
