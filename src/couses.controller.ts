import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  getHello(): object {
    return {messages: "Hello World"};
  }
}
