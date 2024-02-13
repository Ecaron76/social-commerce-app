import { Module, NestModule } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [PrismaModule, ConfigModule.forRoot({isGlobal: true}), CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
