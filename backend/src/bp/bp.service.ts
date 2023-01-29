import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateBpDto } from './dto/update-bp.dto';
import { Bp } from './entities/bp.entity';

@Injectable()
export class BpService {
  constructor(
    @InjectRepository(Bp)
    private pbRepository: Repository<Bp>,
  ) {}

  async findAll() {
    return await this.pbRepository.find();
  }

  async findOne(id: number) {
    return await this.pbRepository.findOneBy({ id: id });
  }

  async update(id: number, updateBpDto: UpdateBpDto) {
    const bp: Bp = await this.pbRepository.findOneBy({ id: id });
    bp.exp = updateBpDto.exp;
    return await this.pbRepository.save(bp);
  }

  async remove(id: number) {
    const user = await this.pbRepository.findOneBy({
      id: id,
    });

    if (!user) {
      throw new NotFoundException(id);
    }

    await this.pbRepository.delete(user);
    return true;
  }
}
