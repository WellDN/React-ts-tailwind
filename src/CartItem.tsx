import { useShoppingCart } from "./hooks/context"
import  storeItems  from "./data/items.json"
import { formatCurrency } from "./FormatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="">
      <img src={item.imgUrl}/>
      <div className="">
          {item.name}{" "}
        <div>
          {quantity > 1 && (
            <span className="">
              x{quantity}
            </span>
          )}
        </div>
        <div className="">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <button
        onClick={() => removeFromCart(item.id)}>
        &times;
      </button>
    </div>
  )
}