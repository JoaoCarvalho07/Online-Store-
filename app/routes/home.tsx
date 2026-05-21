import { getProducts } from "~/services/products";
import { getCategories } from "~/services/categories";

import ProductCard from "~/components/ProductCard";
import CategoryFilter from "~/components/CategoryFilter"

import type { Product } from "~/types/product";
import type { Category } from "~/types/category";

import { useLoaderData } from "react-router";

export async function loader() {
  const [productsData, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  return { products: productsData.products, total: productsData.total, categories };
}

export default function Home() {
  const { products, categories } = useLoaderData(); 
  //console.log(data);
  
  return (
    <div className="flex"> 
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    
      <div className="w-64 hidden md:block">
        <h3 className="font-semibold mb-4 mt-4">Categories</h3>
        <div className="border-b-4">
          {categories.map((category: Category) => (
            <CategoryFilter key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}