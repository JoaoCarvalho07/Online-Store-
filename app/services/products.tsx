export async function getProducts(limit = 9, skip = 0, sortBy = "", order = "") {
  const url = new URL("https://dummyjson.com/products");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);
  
  const response = await fetch(url.toString());
  return response.json();
}