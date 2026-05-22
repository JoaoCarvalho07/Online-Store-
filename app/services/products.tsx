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
  //console.log(url)
  //console.log(response)
  return response.json();
}
