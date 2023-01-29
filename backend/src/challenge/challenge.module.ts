import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { Challenge } from './entities/challenge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BpModule } from 'src/bp/bp.module';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge]), BpModule],
  controllers: [ChallengeController],
  providers: [ChallengeService],
})
export class ChallengeModule {}
