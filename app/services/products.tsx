export async function getProducts(limit = 9, skip = 0) {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return response.json();
}