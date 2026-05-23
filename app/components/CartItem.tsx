import type { Product } from "~/types/product";
import { useCart } from "~/context/CartContext";
import { Trash2 } from "lucide-react";


interface ProductCartProps {
  product: Product;
  quantity: number;
}

export default function CartItem({ product,quantity }: ProductCartProps) {
    const {removeFromCart, updateQuantity } = useCart();

    return (
    <div className ="flex ml-6 mt-4 border-b">
        <img src = {product.thumbnail} className ="border mb-4"/>
        <div className="flex-1 flex flex-col">
            <h2 className="ml-6"> {product.title}  </h2>
            <p className="ml-6 mt-2"> ${product.price}  </p>
            <div className="flex items-center gap-4 ml-6 mt-auto mb-4">
                <div className="border rounded-lg">
                    <button 
                    className="px-2 py-1 cursor-pointer hover:bg-gray-10 mr-2"
                    onClick={() => updateQuantity(product.id,quantity)}
                    > -
                    </button>

                    <span>{quantity}</span>
                    <button 
                        className="px-2 py-1 cursor-pointer hover:bg-gray-100 ml-2"
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
