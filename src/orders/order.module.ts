import { Module } from '@nestjs/common';
import { OrdersController } from './order.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDERS_SERVICE, envs } from 'src/config';

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register([
      { 
        name: ORDERS_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.ORDERS_MS_HOST,
          port: envs.ORDERS_MS_PORT
        }
      },

    ]),
  ]
})
export class OrdersModule {}