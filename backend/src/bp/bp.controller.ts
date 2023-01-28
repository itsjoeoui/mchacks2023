import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BpService } from './bp.service';
import { CreateBpDto } from './dto/create-bp.dto';
import { UpdateBpDto } from './dto/update-bp.dto';

@Controller('bp')
export class BpController {
  constructor(private readonly bpService: BpService) {}

  @Post()
  create(@Body() createBpDto: CreateBpDto) {
    return this.bpService.create(createBpDto);
  }

  @Get()
  findAll() {
    return this.bpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBpDto: UpdateBpDto) {
    return this.bpService.update(+id, updateBpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bpService.remove(+id);
  }
}
