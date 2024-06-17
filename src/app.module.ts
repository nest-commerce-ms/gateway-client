import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/order.module';

@Module({
  imports: [ProductsModule, OrdersModule],
})
export class AppModule {}
