/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Orders as PrismaOrders,
  Product as PrismaProduct,
  User as PrismaUser,
} from "@prisma/client";

export class OrdersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OrdersCountArgs, "select">): Promise<number> {
    return this.prisma.orders.count(args);
  }

  async ordersItems<T extends Prisma.OrdersFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersFindManyArgs>
  ): Promise<PrismaOrders[]> {
    return this.prisma.orders.findMany<Prisma.OrdersFindManyArgs>(args);
  }
  async orders<T extends Prisma.OrdersFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersFindUniqueArgs>
  ): Promise<PrismaOrders | null> {
    return this.prisma.orders.findUnique(args);
  }
  async createOrders<T extends Prisma.OrdersCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersCreateArgs>
  ): Promise<PrismaOrders> {
    return this.prisma.orders.create<T>(args);
  }
  async updateOrders<T extends Prisma.OrdersUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersUpdateArgs>
  ): Promise<PrismaOrders> {
    return this.prisma.orders.update<T>(args);
  }
  async deleteOrders<T extends Prisma.OrdersDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersDeleteArgs>
  ): Promise<PrismaOrders> {
    return this.prisma.orders.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.orders
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.orders
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
