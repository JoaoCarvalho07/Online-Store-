import type { Category } from "~/types/category";

interface CategoryProps {
  category: Category;
}

export default function CategoryFilter({ category }: CategoryProps) {
    return (
    <div className="flex items-center gap-3 ">
      <input type="checkbox" id={category.name} />
      <label className=" "htmlFor={category.name}>{category.name}</label>
    </div>
  );
}