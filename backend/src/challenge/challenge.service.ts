import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}
  // private challenges: Challenge[] = [

  // ];

  async create(createChallengeDto: CreateChallengeDto) {
    const challenge: Challenge = new Challenge();
    challenge.name = createChallengeDto.name;
    challenge.description = createChallengeDto.description;
    challenge.exp = createChallengeDto.exp;
    challenge.menuId = createChallengeDto.menuId;
    challenge.completed = false;
    return await this.challengeRepository.save(challenge);
  }

  async findAll() {
    return await this.challengeRepository.find();
  }

  async findOne(id: number) {
    return await this.challengeRepository.findOneBy({ id: id });
  }

  async update(id: number, updateChallengeDto: UpdateChallengeDto) {
    const challenge: Challenge = await this.challengeRepository.findOneBy({
      id: id,
    });
    if (updateChallengeDto.completed !== undefined) {
      challenge.completed = updateChallengeDto.completed;
    }
    return await this.challengeRepository.save(challenge);
  }

  async remove() {
    const challenges = await this.challengeRepository.find();

    for (const challenge of challenges) {
      await this.challengeRepository.delete(challenge.id);
    }
  }
}
