import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ChallengeModule } from '@shared/challenge/challenge.module';
import { ChallengeService } from '@shared/challenge/challenge.service';
import { Challenge } from '@shared/challenge/entities/challenge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Challenge])],
  controllers: [UsersController],
  providers: [UsersService, ChallengeService],
  exports: [UsersService],
})
export class UsersModule {}
