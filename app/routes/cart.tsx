import { useCart } from "~/context/CartContext";
import { Trash2 } from "lucide-react";
import CartItem from "~/components/CartItem";
import CartSummary from "~/components/CartSummary"; 
import { Link } from "react-router";

export default function Product() {
    const { cartItems} = useCart();

    const subTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = 20
    const total = subTotal +shipping;
    //console.log(cartItems);
    return (
  <div className="flex flex-col md:flex-row overflow-x-hidden">
    {cartItems.length === 0 ? (
      <div className="flex flex-col items-center justify-center w-full mt-16 gap-4">
        <h2 className="font-bold text-2xl text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added anything yet</p>
        <Link to="/" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        <div className="flex flex-1 flex-col">
          {cartItems.map((item) => (
            <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
          ))}
        </div>
        <CartSummary subTotal={subTotal} shipping={shipping} total={total} />
      </>
    )}
  </div>
);
}
