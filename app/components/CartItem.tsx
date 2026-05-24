import type { Product } from "~/types/product";
import { useCart } from "~/context/CartContext";
import { Trash2 } from "lucide-react";
import { Link } from "react-router";


interface ProductCartProps {
  product: Product;
  quantity: number;
}

export default function CartItem({ product,quantity }: ProductCartProps) {
    const {removeFromCart, updateQuantity } = useCart();

    return (
    <div className ="flex mx-6 mt-4 border-b">
        <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} className="border mb-4 w-24 h-24 md:w-40 md:h-40 object-contain" />
        </Link>
        <div className="flex-1 flex flex-col">
            <Link to={`/product/${product.id}`} className="ml-6 font-medium hover:underline">
                {product.title}
            </Link>
            <p className="ml-6 mt-2"> ${product.price}  </p>
            <div className="flex items-center gap-4 ml-6 mt-auto mb-4">
                <div className="border rounded-lg">
                    <button 
                        className="px-2 py-1 cursor-pointer mr-2"
                        onClick={() => updateQuantity(product.id,quantity -1)}
                    > -
                    </button>

                    <span>{quantity}</span>
                    <button 
                        className="px-2 py-1 cursor-pointer ml-2"
                        onClick={() => updateQuantity(product.id,quantity+1)}
                    > + 
                    </button>
                </div>

                <button className=" cursor-pointer hover:text-red-700"
                    onClick={() => removeFromCart(product.id)}>
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    </div>
    )
}
