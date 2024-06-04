import { ProductCreateNestedManyWithoutOrdersItemsInput } from "./ProductCreateNestedManyWithoutOrdersItemsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdersCreateInput = {
  paymentIntent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersItemsInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
