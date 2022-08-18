import { Link } from "react-router-dom";
import  storeItems from './data/items.json'
import { formatCurrency } from "./FormatCurrency";
import { useShoppingCart } from "./hooks/context";


type HomeItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function HomeItem({ id }: HomeItemProps) {
    const { increaseCartQuantity } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
  if (item == null) return null

return (
    <div>
        <div className="">{item.name}{" "}</div> 
        <div className="">
            {formatCurrency(item.price)}
        </div>
            <button className='rounded-full pb-1 pr-2 pl-2 border-2 border-slate-600 hover:border-slate-900' onClick={() => increaseCartQuantity(id)}>
    <Link to="/store" className="text-1xl text-slate-600 hover:text-stone-800">
     Add to cart 
    </Link></button>
     
    </div>//cartItem.THISSSSS
    )}