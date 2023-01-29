import { User } from '@shared/users/entities/user.entity';

export class CreateChallengeDto {
  name: string;
  description: string;
  exp: number;
  user: User;
}
