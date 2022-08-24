import { useShoppingCart } from '../hooks/context'
import storeItems  from "../data/items.json"
import { formatCurrency } from '../FormatCurrency'
import { CartItem } from '../CartItem'

type ShoppingCartProps = { //put it on children provider and make an open and close function
  id: number
}

export function ShoppingCart (/*ShoppingCartProps*/) { //inside the cart
  const { closeCart, cartItems, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  
    return(
      <div className="">
      <button onClick={()=> closeCart}>
        <h1>Cart</h1>
      </button>
      <body>
        <div className="">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
            ))}
          <div className="">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          </div>
          </body>
          </div>
   )}