import { useCart } from "~/context/CartContext";
import { Trash2 } from "lucide-react";
import CartItem from "~/components/CartItem";


export default function Product() {
    const { cartItems} = useCart();

    //console.log(cartItems);
    return(
        <div className="flex">
            {cartItems.length === 0 && <p>Your cart is empty</p>}
                <div className="flex-1 flex-col">
                    {cartItems.map((item) => (
                        <CartItem product={item.product} quantity={item.quantity}></CartItem>
                    ))}
                </div>

            <div className="border w-1/5 ">

            </div>
        </div>
    )
}
