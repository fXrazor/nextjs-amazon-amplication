import { ProductUpdateManyWithoutOrdersItemsInput } from "./ProductUpdateManyWithoutOrdersItemsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdersUpdateInput = {
  paymentIntent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutOrdersItemsInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
