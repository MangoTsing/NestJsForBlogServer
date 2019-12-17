import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(res): string {
    return `Hello World!${res}`;
  }
}
