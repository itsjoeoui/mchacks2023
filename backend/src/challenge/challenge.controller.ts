import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
} from '@nestjs/common';
import { ChallengeService } from './challenge.service';
// import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  // @Post()
  // create(@Body() createChallengeDto: CreateChallengeDto) {
  //   return this.challengeService.create(createChallengeDto);
  // }

  @Get()
  findAll() {
    return this.challengeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.challengeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChallengeDto: UpdateChallengeDto,
  ) {
    return this.challengeService.update(+id, updateChallengeDto);
  }

  @Delete()
  remove() {
    return this.challengeService.remove();
  }

  @Post('/complete:id')
  complete(@Param('id') id: string) {
    const updateDto = new UpdateChallengeDto();
    updateDto.completed = true;
    this.challengeService.update(+id, updateDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.challengeService.remove(+id);
  // }
}
