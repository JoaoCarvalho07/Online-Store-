import type { Review } from "~/types/review";

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  discountPercentage: number;
  description: string;
  review: Review[];
}