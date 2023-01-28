import { Injectable } from '@nestjs/common';
import { CreateBpDto } from './dto/create-bp.dto';
import { UpdateBpDto } from './dto/update-bp.dto';

@Injectable()
export class BpService {
  create(createBpDto: CreateBpDto) {
    return 'This action adds a new bp';
  }

  findAll() {
    return `This action returns all bp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bp`;
  }

  update(id: number, updateBpDto: UpdateBpDto) {
    return `This action updates a #${id} bp`;
  }

  remove(id: number) {
    return `This action removes a #${id} bp`;
  }
}
