import type { Product } from "~/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col p-4">
      <img 
        src={product.thumbnail} 
        alt={product.title}
  className="w-full h-98 object-contain border"      />
      <p className="mt-2">{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}