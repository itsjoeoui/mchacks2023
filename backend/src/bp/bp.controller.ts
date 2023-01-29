import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { BpService } from './bp.service';
import { UpdateBpDto } from './dto/update-bp.dto';

@Controller('bp')
export class BpController {
  constructor(private readonly bpService: BpService) {}

  // @Get()
  // async findAll() {
  //   return await this.bpService.findAll();
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bpService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBpDto: UpdateBpDto) {
    return await this.bpService.update(+id, updateBpDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bpService.remove(+id);
  // }
}
