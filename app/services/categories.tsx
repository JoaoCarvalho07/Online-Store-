export async function getCategories() {
  const response = await fetch(`https://dummyjson.com/products/categories`);
  return response.json();
}