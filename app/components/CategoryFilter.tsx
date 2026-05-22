import type { Category } from "~/types/category";
import { useNavigate, useSearchParams } from "react-router";


interface CategoryProps {
  category: Category;
}

export default function CategoryFilter({ category }: CategoryProps) {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    
    const handleCheckbox = (category: string, checked: boolean) => {
      const params = new URLSearchParams(searchParams);
      const current = params.get("categories") || "";
      const selected = current ? current.split(",") : [];

      if (checked) {
        selected.push(category);
      } else {
        const index = selected.indexOf(category);
        selected.splice(index, 1);
      }

      if (selected.length > 0) {
        params.set("categories", selected.join(","));
      } else {
        params.delete("categories");
      }

      params.set("page", "1");
      navigate(`/?${params.toString()}`);
    }

    return (
    <div className="flex items-center gap-3 ">
      <input type="checkbox" id={category.name} onChange={(e) => handleCheckbox(category.name, e.target.checked)} />
      <label htmlFor={category.name}>{category.name}</label>
    </div>
  );
}