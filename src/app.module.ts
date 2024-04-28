import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { CategoriesModule } from './module/categories/categories.module';
import { ProductsModule } from './module/products/products.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
