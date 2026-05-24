export async function getProducts(limit = 9, skip = 0, sortBy = "", order = "", category = "") {

  if(category == ""){
    var url = new URL("https://dummyjson.com/products");
  } 
  else var url = new URL(`https://dummyjson.com/products/category/${category}`)

  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);
  
  const response = await fetch(url.toString());

  return response.json();
}


export async function getProductById(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
}

export async function getFilteredProducts(
  limit = 9,
  skip = 0,
  sortBy = "",
  order = "",
  selectedCategories: string[] = []
  ) {
  if (selectedCategories.length === 0) {
    return getProducts(limit, skip, sortBy, order);
  }

  const results = await Promise.all(
    selectedCategories.map(cat => getProducts(limit, skip, sortBy, order, cat))
  );

  const products = results.flatMap(r => r.products);
  const total = results.reduce((sum, r) => sum + r.total, 0);
  return { products, total };
}