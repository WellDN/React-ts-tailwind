import { useShoppingCart } from "./hooks/context"
import  items  from "./data/items.json"
import { formatCurrency } from "./FormatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = items.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="horizontal">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="">hgfhg
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
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