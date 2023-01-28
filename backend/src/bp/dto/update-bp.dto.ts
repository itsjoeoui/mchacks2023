import { PartialType } from '@nestjs/swagger';
import { CreateBpDto } from './create-bp.dto';

export class UpdateBpDto extends PartialType(CreateBpDto) {}
