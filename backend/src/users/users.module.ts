import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ChallengeModule } from '@shared/challenge/challenge.module';
import { ChallengeService } from '@shared/challenge/challenge.service';
import { Challenge } from '@shared/challenge/entities/challenge.entity';
import { Item } from '@shared/items/entities/item.entity';
import { ItemsService } from '@shared/items/items.service';
import { Inventory } from '@shared/inventory/entities/inventory.entity';
import { InventoryService } from '@shared/inventory/inventory.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Challenge, Item, Inventory])],
  controllers: [UsersController],
  providers: [UsersService, ChallengeService, ItemsService, InventoryService],
  exports: [UsersService],
})
export class UsersModule {}
