/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Orders } from "./Orders";
import { OrdersCountArgs } from "./OrdersCountArgs";
import { OrdersFindManyArgs } from "./OrdersFindManyArgs";
import { OrdersFindUniqueArgs } from "./OrdersFindUniqueArgs";
import { CreateOrdersArgs } from "./CreateOrdersArgs";
import { UpdateOrdersArgs } from "./UpdateOrdersArgs";
import { DeleteOrdersArgs } from "./DeleteOrdersArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { User } from "../../user/base/User";
import { OrdersService } from "../orders.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Orders)
export class OrdersResolverBase {
  constructor(
    protected readonly service: OrdersService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "read",
    possession: "any",
  })
  async _ordersItemsMeta(
    @graphql.Args() args: OrdersCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Orders])
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "read",
    possession: "any",
  })
  async ordersItems(
    @graphql.Args() args: OrdersFindManyArgs
  ): Promise<Orders[]> {
    return this.service.ordersItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Orders, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "read",
    possession: "own",
  })
  async orders(
    @graphql.Args() args: OrdersFindUniqueArgs
  ): Promise<Orders | null> {
    const result = await this.service.orders(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Orders)
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "create",
    possession: "any",
  })
  async createOrders(@graphql.Args() args: CreateOrdersArgs): Promise<Orders> {
    return await this.service.createOrders({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Orders)
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @graphql.Args() args: UpdateOrdersArgs
  ): Promise<Orders | null> {
    try {
      return await this.service.updateOrders({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Orders)
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "delete",
    possession: "any",
  })
  async deleteOrders(
    @graphql.Args() args: DeleteOrdersArgs
  ): Promise<Orders | null> {
    try {
      return await this.service.deleteOrders(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product], { name: "products" })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @graphql.Parent() parent: Orders,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Orders): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
