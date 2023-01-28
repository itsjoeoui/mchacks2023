import { Module } from '@nestjs/common';
import { BpService } from './bp.service';
import { BpController } from './bp.controller';

@Module({
  controllers: [BpController],
  providers: [BpService],
})
export class BpModule {}
