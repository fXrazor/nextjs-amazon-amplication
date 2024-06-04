import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Orders = {
  createdAt: Date;
  id: string;
  paymentIntent: string | null;
  paymentStatus: boolean | null;
  price: number | null;
  products?: Array<Product>;
  status: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
