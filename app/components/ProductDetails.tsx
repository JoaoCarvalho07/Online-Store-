import type { Product } from "~/types/product";
import { useCart } from "~/context/CartContext";
import { useState, useEffect } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductCardProps) {
  const {addToCart} = useCart();

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  function handleAddToCart() {
    addToCart(product);
    setShowToast(true);
  }
  
  return (
    <div className="flex flex-col mb-8">
        <span className="font-bold text-2xl text-gray-900"> {product.title} </span>
        <span className="font-bold text-2xl text-gray-900"> ${product.price} </span>
        <p className="text-sm text-gray-600 mt-1">⭐ {product.rating}</p>
        <button 
          className="border bg-gray-900 text-white py-2 mt-6 cursor-pointer hover:bg-gray-950"
          onClick={handleAddToCart}
          >
          Add to Cart
        </button>
        <hr className="mt-6 border-gray-600 border-1" />
        <p className="mt-6 font-semibold text-gray-900">Product Details</p>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        {showToast && (
          <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
            ✓ Product added to cart!
          </div>
        )}
    </div>
  );
}