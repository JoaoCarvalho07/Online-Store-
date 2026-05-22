import type { Product } from "~/types/product";
import { Link } from "react-router";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="flex flex-col p-4 hover:shadow-md transition-shadow duration-200">
      <img 
        src={product.thumbnail} 
        alt={product.title}
        className="w-full h-98 object-contain border"      />
      <p className="mt-2">{product.title}</p>
      <p>${product.price}</p>
    </Link>
  );
}