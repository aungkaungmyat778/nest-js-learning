import { Injectable } from '@nestjs/common';

// Business logic

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello!';
  }

  getHelloWithName(name: string): string {
    return `Hello ${name}!!`;
  }
}
