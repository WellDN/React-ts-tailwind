import { formatCurrency } from '../FormatCurrency'
import { useShoppingCart } from './context'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const  {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id) //store item

  
return(
  <div>
    <div className="">
   <img src={imgUrl}></img>
    </div>
  <span className="">{name}</span>
      <span className="">{formatCurrency(price)}</span>
    <div className="">
      </div>
      <button className="w-100" onClick={() => increaseCartQuantity(id)}>
          + Add To Cart
        </button>
       <div>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
        </div><div>
            <span className="">{quantity}</span> in cart
          </div><div>
            <button onClick={() => decreaseCartQuantity(id)}>-</button>
          </div><div>
            <button
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
</div>
)
}
