import { Controller, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('filldb')
  fillDb() {
    return this.appService.fillDb();
  }

  @Post('order')
  order(@Param('userId') userId: number, @Param('orderId') orderId: number) {
    return this.appService.order(userId, orderId);
  }
}
