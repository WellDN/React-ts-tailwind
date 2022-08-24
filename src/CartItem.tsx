import { useShoppingCart } from "./hooks/context"
import  storeItems  from "./data/items.json"
import { formatCurrency } from "./FormatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null //if the item exist receive a id, if not return null.

  return (
    <div className="">
      <img src={item.imgUrl}/>
      <div className="">
          {item.name}{" "}
        <div>
          {quantity > 1 && ( //will render the information given
            <span className="">
              x{quantity}
            </span>                                                         //this is the function component, put the function inside it and then map in another component so it 'duplicate'
          )}
        </div>
        <button onClick={() => increaseCartQuantity(id)}>+</button>
        <button onClick={() => decreaseCartQuantity(id)}>-</button>
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