import { useCart } from "../context/CartContext"
import { formatCurrency } from "../util/formatCurrency"
import { CartProduct } from "./CartProduct"
import StoreProducts from "../data/items.json"

type CartProps = {
  isOpen: boolean
}

export function Cart({ isOpen }: CartProps) {
  const { closeCart, CartProducts } = useCart();
  
  return (
    <div>
      <div>
        <div>Cart</div>
      </div>
      <div>
        <div>
          {CartProducts.map(item => (
            <CartProduct key={item.id} {...item} />
          ))}
          <div>
            Total{" "}
            {formatCurrency(
              CartProducts.reduce((total, CartProduct) => {
                const item = StoreProducts.find(i => i.id === CartProduct.id)
                return total + (item?.price || 0) * CartProduct.quantity
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
