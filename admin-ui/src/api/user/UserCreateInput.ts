import { OrdersCreateNestedManyWithoutUsersInput } from "./OrdersCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isAdmin?: boolean | null;
  lastName?: string | null;
  order?: OrdersCreateNestedManyWithoutUsersInput;
  password: string;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
