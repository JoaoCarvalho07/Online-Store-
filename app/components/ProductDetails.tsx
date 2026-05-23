import type { Product } from "~/types/product";
import { useCart } from "~/context/CartContext";


interface ProductCardProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductCardProps) {
  const cart = useCart();
  
  return (
    <div className="flex flex-col mb-8">
        <span className="font-bold text-2xl text-gray-900"> {product.title} </span>
        <span className="font-bold text-2xl text-gray-900"> ${product.price} </span>
        <button 
          className="border bg-gray-900 text-white py-2 mt-6 cursor-pointer hover:bg-gray-950"
          onClick={() => cart.addToCart(product)}
          >
          Add to Cart
        </button>
        <hr className="mt-6 border-gray-600 border-1" />
        <p className="mt-6 font-semibold text-gray-900">Product Details</p>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
    </div>
  );
}