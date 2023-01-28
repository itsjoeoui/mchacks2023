import { Module } from '@nestjs/common';
import { BpService } from './bp.service';
import { BpController } from './bp.controller';
import { Bp } from './entities/bp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bp])],
  controllers: [BpController],
  providers: [BpService],
})
export class BpModule {}
