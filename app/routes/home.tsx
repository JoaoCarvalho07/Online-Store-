import { getCategories } from "~/services/categories";
import { getFilteredProducts } from "~/services/products";

import ProductCard from "~/components/ProductCard";
import CategoryFilter from "~/components/CategoryFilter"
import SortDropDown from "~/components/SortDropdown";
import Pagination from "~/components/Pagination";
import CategoryFilterMobile from "~/components/CategoryFilterMobile";

import type { Product } from "~/types/product";
import type { Category } from "~/types/category";

import { useLoaderData } from "react-router";



export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const sortBy = url.searchParams.get("sortBy") || "";
  const order = url.searchParams.get("order") || "";
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = 9;
  const skip = (page - 1) * limit;
  const selectedCategories = url.searchParams.get("categories")?.split(",") || [];

  const [productsData, categories] = await Promise.all([
    getFilteredProducts(limit, skip, sortBy, order, selectedCategories),
    getCategories(),
  ]);

  return { products: productsData.products, total: productsData.total, categories, page };
}

export default function Home() {
  const { products, categories, total, page } = useLoaderData(); 

  const start = ( page-1 ) *9 + 1 ;
  const end = Math.min(page*9,total);

  return (

    <div className="mt-8">
      <div className="flex">
        <div className="flex-1">
          <div className="flex gap-4 items-center">
              <SortDropDown />
            
              <div className="ml-auto mr-4">
                <p className="text-gray-800">Showing {start} - {end} products of {total}</p>
              </div>
          </div>
          
          <CategoryFilterMobile categories={categories}/>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-end mt-6 mb-8 mr-4">
            <Pagination page={page} total={total} limit={9} />
          </div>
        </div>

        <div className="w-64 hidden md:block mr-8 ml-8">
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="border-b border-gray-400 pb-6">
            {categories.map((category: Category) => (
              <CategoryFilter key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}