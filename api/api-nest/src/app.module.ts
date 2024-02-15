import { Module, NestModule } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [PrismaModule, ConfigModule.forRoot({isGlobal: true}), CategoryModule, AuthModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
