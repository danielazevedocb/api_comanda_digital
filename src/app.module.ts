import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { CategoriesModule } from './module/categories/categories.module';
import { ProductsModule } from './module/products/products.module';
import { OrdersModule } from './module/orders/orders.module';
import { ItemsModule } from './module/items/items.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    ItemsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
