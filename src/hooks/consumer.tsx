type StoreItemProps = {
    id: number
}

export function StoreItem({ id }: StoreItemProps) {
  const  {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id) //store item

  
return(<div>
  <div>
    <button onClick={() => increaseCartQuantity(id)}>+</button>
  </div>
  <div>
 <span className="">{quantity}</span> in cart
 </div>
  <div>
  <button onClick={() => removeFromCart(id)}>-</button>
  </div>
  <div>

    <button className="w-100" onClick={() => increaseCartQuantity(id)}>
      + Add To Cart
    </button>
</div>
})