import { getProductById } from "~/services/products";
import { useLoaderData } from "react-router";
import ProductDetails from "~/components/ProductDetails";


export async function loader({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  return { product };
}

export default function Product() {
    const { product } = useLoaderData(); 
    return(
        <div className="flex flex-col md:flex-row mt-8 ml-8 mr-8">
            <div className="mb-8">
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="border object-contain w-[1600px] h-[600px]" 
                />
            </div>
            <ProductDetails product={product}/>
        </div>
    )
}
