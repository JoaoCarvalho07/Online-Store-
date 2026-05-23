import { useNavigate, useSearchParams } from "react-router";
import { sortOptions } from "~/constants/sortOptions";

export default function SortDropDown() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const option = sortOptions.find((o) => o.value === value);
        const params = new URLSearchParams(searchParams);
        
        if (option?.sortBy) {
            params.set("sortBy", option.sortBy);
            params.set("order", option.order);
        } else {
            params.delete("sortBy");
            params.delete("order");
        }
        
        params.set("page", "1");
        navigate(`/?${params.toString()}`);
    }
    
    return (
        <select className="border border-gray-300 rounded-lg px-3 py-2 ml-4" onChange={handleSort} >
            {sortOptions.map((option) => (
            <option key = {option.value} value={option.value}> {option.label} </option> 
            ))}
        </select>
    )
}