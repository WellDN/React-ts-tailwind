import { useContext } from "react";
import { formatCurrency } from "./FormatCurrency";
import { useShoppingCart } from "./hooks/context";

type HomeItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function HomeItem({ id, name, price, imgUrl}: HomeItemProps) {
    const { increaseCartQuantity } = useShoppingCart()

return (
    <div>
        <button onClick={() => increaseCartQuantity(id)}>+</button>
    </div>//cartItem.
)}