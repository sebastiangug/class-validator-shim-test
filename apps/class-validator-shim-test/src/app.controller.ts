import { VerifyMobileDTO } from '@app/entities';
import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() dto: VerifyMobileDTO): string {
    return this.appService.getHello();
  }
}
