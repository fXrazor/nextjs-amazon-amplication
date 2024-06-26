import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  ordersId?: SortOrder;
  title?: SortOrder;
  titlePrice?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
