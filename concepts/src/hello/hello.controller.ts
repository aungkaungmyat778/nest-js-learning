import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

//Icoming request and return response
// GET,POST,PUT,DELETE

//localhost:3000/hello
@Controller('hello')
export class HelloController {
  constructor(private readonly helloservice: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloservice.getHello();
  }

  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloservice.getHelloWithName(name);
  }

  //With query
  @Get('nameQuery')
  getHelloWithQuery(@Query('name') name: string): string {
    return this.helloservice.getHelloWithName(name);
  }
}
