import { Link } from 'react-router-dom'
import  { useShoppingCart } from '../hooks/context'
import  items  from '../data/items.json'
import { formatCurrency } from '../FormatCurrency'
import { CartItem } from '../CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart (/*ShoppingCartProps*/) {
  const { closeCart, cartItems } = useShoppingCart()
    return(
      <div className="end">THIS HAVE TO BE OUT OF THIS FILE RN
      <button onClick={()=>"closeButton"}>
        <h1>Cart</h1>
      </button>
      <body>
        <div className="">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          </div>
          </body>
          </div>
   )}