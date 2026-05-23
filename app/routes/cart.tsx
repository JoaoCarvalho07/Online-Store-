import { useCart } from "~/context/CartContext";
import { Trash2 } from "lucide-react";
import CartItem from "~/components/CartItem";
import CartSummary from "~/components/CartSummary"; 


export default function Product() {
    const { cartItems} = useCart();

    const subTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = 20
    const total = subTotal +shipping;
    //console.log(cartItems);
    return(
        <div className="flex flex-col md:flex-row overflow-x-hidden">
            {cartItems.length === 0 && <h2 className="font-bold text-lg m-4">Your cart is empty</h2>}
                <div className="flex flex-1 flex-col">
                    {cartItems.map((item) => (
                        <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
                    ))}
                </div>

                <CartSummary subTotal={subTotal}  shipping={shipping} total={total}/>
        </div>
    )
}
