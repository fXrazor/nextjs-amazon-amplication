import { Orders as TOrders } from "../api/orders/Orders";

export const ORDERS_TITLE_FIELD = "paymentIntent";

export const OrdersTitle = (record: TOrders): string => {
  return record.paymentIntent?.toString() || String(record.id);
};
