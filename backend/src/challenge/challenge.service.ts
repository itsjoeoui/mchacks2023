import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengeService {
  private challenges: Challenge[] = [
    {
      id: 1,
      name: 'Sushi Sama',
      description: 'Buy 1 get 1 free',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Flogoroga.com%2Fwp-content%2Fuploads%2F2016%2F01%2FsamaPrev.png%3Ffit%3D800%252C800%26ssl%3D1&f=1&nofb=1&ipt=6eb2763440d5d8f53130bb83737e93281075f5564d3a91fbf247dce4024b54fc&ipo=images',
      exp: 100,
      completed: false,
    },
    {
      id: 2,
      name: 'Basha',
      description: 'Spend $15, earn 100 Radish coins',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmoijachetelocalement.com%2Fwp-content%2Fuploads%2Fbfi_thumb%2Fbasha-logo-ndg6jbd2el3qplqchy48bz8jgnw5l1temj3xmdhctc.jpg&f=1&nofb=1&ipt=04cf80d09c874774c537d55d64a199df44497545d3cfc9def70201368cb5e2b2&ipo=images',
      exp: 233,
      completed: false,
    },
    {
      id: 3,
      name: 'Thai Express',
      description: 'Free item after spending 10$',
      image:
        'https://www.shopavalonmall.com/assets/Uploads/Thai-Express-Square-TX-logo-Oct-2016.png',
      exp: 302,
      completed: false,
    },
  ];

  create(createChallengeDto: CreateChallengeDto) {
    // const challenge: Challenge = new Challenge();
    const challenge: Challenge = new Challenge();
    challenge.id = this.challenges.length + 1;
    challenge.name = createChallengeDto.name;
    challenge.description = createChallengeDto.description;
    challenge.image = createChallengeDto.image;
    challenge.exp = createChallengeDto.exp;
    challenge.completed = false;
    this.challenges.push(challenge);
    return challenge;
  }

  findAll() {
    return this.challenges;
  }

  findOne(id: number) {
    return this.challenges.find((challenge) => challenge.id === id);
  }

  update(id: number, updateChallengeDto: UpdateChallengeDto) {
    const challenge: Challenge = this.challenges.find(
      (challenge) => challenge.id === id,
    );
    if (updateChallengeDto.completed !== undefined) {
      challenge.completed = updateChallengeDto.completed;
      // if (updateChallengeDto.completed === true) {
      // } else {
      // }
    }

    return challenge;
  }

  remove(id: number) {
    this.challenges = this.challenges.filter((c) => c.id != id);
    return true;
  }
}
