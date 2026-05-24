import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import type { Category } from "~/types/category";
import CategoryFilter from "./CategoryFilter";

interface CategoryFilterMobileProps {
  categories: Category[];
}

export default function CategoryFilterMobile({ categories }: CategoryFilterMobileProps) {
  const [showCategories, setShowCategories] = useState(false);

    return(
        <>
            <button 
                className=" mx-4 mt-4 md:hidden border border-gray-300  px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                onClick={() => setShowCategories(!showCategories)}
                >
                <SlidersHorizontal size={16} />
                Filter By Category
            </button>

            {showCategories && (
                <div className="md:hidden border rounded-lg p-4 mt-2 max-h-64 overflow-y-auto mx-4">
                {categories.map((category: Category) => (
                    <CategoryFilter key={category.name} category={category} />
                ))}
                </div>
            )}
        </>
)}