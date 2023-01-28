import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BpModule } from 'src/bp/bp.module';
import { BpService } from 'src/bp/bp.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), BpModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
