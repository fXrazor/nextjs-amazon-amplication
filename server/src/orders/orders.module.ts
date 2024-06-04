import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrdersModuleBase } from "./base/orders.module.base";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { OrdersResolver } from "./orders.resolver";

@Module({
  imports: [OrdersModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService],
})
export class OrdersModule {}
