import { Orders } from "../orders/Orders";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  order?: Array<Orders>;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
