import { Injectable } from '@nestjs/common';
import { HelloController } from 'src/hello/hello.controller';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  //Injecting services from othe module
  constructor(private readonly helloservice: HelloService) {}

  getAllUser() {
    return [
      { id: 1, name: 'Aung' },
      { id: 2, name: 'Kaung' },
      { id: 3, name: 'Mayt' },
    ];
  }
}
