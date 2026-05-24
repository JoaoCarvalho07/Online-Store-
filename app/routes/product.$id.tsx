import { getProductById } from "~/services/products";
import { useLoaderData } from "react-router";
import ProductDetails from "~/components/ProductDetails";
import ProductReviews from "~/components/ProductReviews";
import type { Review } from "~/types/review";

export async function loader({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  return { product };
}

export default function Product() {
    const { product } = useLoaderData(); 
    
    return(
        <div>
            <div className="flex flex-col md:flex-row mt-8 mx-8 gap-8">
                <div className="mb-8">
                    <img 
                        src={product.images[0]} 
                        alt={product.title} 
                        className="border object-contain w-[1600px] h-[600px]" 
                    />
                </div>
                <ProductDetails product={product}/>
            </div>
            <div className="mx-8 mt-8">
                <h2 className="font-bold text-3xl text-center my-2"> Product Reviews</h2>
                {product.reviews.map((review: Review) => (
                    <ProductReviews key={review.reviewerEmail} review={review} />
                ))}
            </div>
        </div>

    )
}
