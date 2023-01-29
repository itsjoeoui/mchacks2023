import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BpModule } from './bp/bp.module';
import { ChallengeModule } from './challenge/challenge.module';
import { ConfigModule } from './config/config.module';
import { ItemsModule } from './items/items.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'default_database',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    BpModule,
    ChallengeModule,
    ConfigModule,
    ItemsModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
