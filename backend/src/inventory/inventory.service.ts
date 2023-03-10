import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto) {
    const inventory = new Inventory();
    inventory.items = [];
    return await this.inventoryRepository.save(inventory);
  }

  async findAll() {
    return await this.inventoryRepository.find({ relations: ['items'] });
  }

  async findOne(id: number) {
    return await this.inventoryRepository.findOne({
      where: { id },
      relations: ['items'],
    });
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
