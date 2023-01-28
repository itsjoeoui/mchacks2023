import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateBpDto } from './dto/create-bp.dto';
import { UpdateBpDto } from './dto/update-bp.dto';
import { Bp } from './entities/bp.entity';

@Injectable()
export class BpService {
  constructor(
    @InjectRepository(Bp)
    private pbRepository: Repository<Bp>,
  ) {}

  // create(createBpDto: CreateBpDto) {
  //   return 'This action adds a new bp';
  // }

  findAll() {
    return this.pbRepository.find();
  }

  findOne(id: number) {
    return this.pbRepository.findOneBy({ id: id });
  }

  async update(id: number, updateBpDto: UpdateBpDto) {
    const bp: Bp = await this.pbRepository.findOneBy({ id: id });
    bp.exp = updateBpDto.exp;
    return await this.pbRepository.save(bp);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} bp`;
  // }
}
