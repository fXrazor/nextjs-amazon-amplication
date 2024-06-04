import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrdersWhereUniqueInput } from "../orders/OrdersWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number | null;
  images?: InputJsonValue;
  orders?: OrdersWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  titlePrice?: number;
  variants?: InputJsonValue;
};
