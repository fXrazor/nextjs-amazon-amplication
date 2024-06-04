import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Orders } from "../orders/Orders";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number | null;
  id: string;
  images: JsonValue;
  orders?: Orders | null;
  reviews?: Array<Review>;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
