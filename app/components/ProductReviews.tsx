import type { Review } from "~/types/review";

interface ProductReviewsProp {
  review: Review;
}

export default function ProductReviews({review} :ProductReviewsProp) {
    //console.log(review);

    return (
    <div className="flex border-b my-2">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start w-full mb-2">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-lg">{review.reviewerName}</h3>
            <p>{"⭐".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
          </div>
          <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
        </div>
        <p className="text-xs text-gray-400">{review.reviewerEmail}</p>
        <span className="text-gray-800 mt-4">{review.comment}</span>
      </div>
    </div>
  );
}