import { SortOrder } from "../../util/SortOrder";

export type OrdersOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentIntent?: SortOrder;
  paymentStatus?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
