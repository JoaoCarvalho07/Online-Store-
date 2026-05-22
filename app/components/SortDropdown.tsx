import { useNavigate } from "react-router";
import { sortOptions } from "~/constants/sortOptions";

export default function SortDropDown() {
    const navigate = useNavigate();

    function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const option = sortOptions.find((o) => o.value === value);
        
        if (option?.sortBy) {
            navigate(`/?sortBy=${option.sortBy}&order=${option.order}`);
        } else {
            navigate("/");
        }
    }
    
    return (
        <select className="border border-gray-300 rounded-lg px-3 py-2 ml-4" onChange={handleSort} >
            {sortOptions.map((option) => (
            <option value={option.value}> {option.label} </option> 
            ))}
        </select>
    )
}