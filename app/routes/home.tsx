import { getProducts } from "~/services/products";
import { getCategories } from "~/services/categories";

import ProductCard from "~/components/ProductCard";
import CategoryFilter from "~/components/CategoryFilter"
import SortDropDown from "~/components/SortDropdown";
import Pagination from "~/components/Pagination";

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

  const [productsData, categories] = await Promise.all([
    getProducts(limit, skip, sortBy, order),
    getCategories(),
  ]);
  return { products: productsData.products, total: productsData.total, categories, page };
}

export default function Home() {
  const { products, categories, total, page } = useLoaderData(); 
  //console.log(data);
  
  return (

    <div className="mt-8">
      <SortDropDown />

      <div className="flex">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <Pagination page={page} total={total} limit={9} />
          </div>
        </div>

        <div className="w-64 hidden md:block mr-8 ml-8">
          <h3 className="font-semibold mb-4 mt-4">Categories</h3>
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