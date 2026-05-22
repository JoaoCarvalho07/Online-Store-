export const sortOptions = [
  { value: "", label: "Sort by" },
  { value: "price-asc", label: "Price: Low to High", sortBy: "price", order: "asc" },
  { value: "price-desc", label: "Price: High to Low", sortBy: "price", order: "desc" },
  { value: "name-asc", label: "Name: A to Z", sortBy: "title", order: "asc" },
  { value: "name-desc", label: "Name: Z to A", sortBy: "title", order: "desc" },
  { value: "rating", label: "Rating", sortBy: "rating", order: "desc" },
];