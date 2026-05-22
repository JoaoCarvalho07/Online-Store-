import { useNavigate, useSearchParams } from "react-router";



interface PaginationProps {
  page: number;
  total: number;
  limit: number;
}

export default function Pagination({ page, total, limit }: PaginationProps) {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const totalPages = Math.ceil(total / limit);

    const getPageNumbers = () => {
        const pages = [];
        let start = Math.max(1, page - 2);
        let end = Math.min(totalPages, start + 4);
        
        start = Math.max(1, end - 4);
        
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    function goToPage(p: number) {
        const params = new URLSearchParams(searchParams);
        
        params.set("page", String(p));
        navigate(`/?${params.toString()}`);
    }
    
  return (
    <div className="flex gap-2">
        <button onClick={() => goToPage(page - 1)} disabled={page === 1}>{"<"}</button>
        {getPageNumbers().map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer border 
                ${page === p
                  ? "bg-gray-900 text-white border-gray-950 hover:bg-gray-950"
                  : "bg-white text-black border-gray-300 hover:bg-gray-300"}
              `}
            >
              {p}
            </button>
        ))}
        <button onClick={() => goToPage(page + 1)} disabled={page === totalPages}>{">"}</button>
    </div>
  );
}