import { Injectable } from '@nestjs/common';
import { fuckingbliatDto } from './fuckingbliat.dto';

@Injectable()
export class FuckingbliatService {
  private fuckingBliat = [
    {
      id: 1,
      name: 'Hello',
      isComplete: false,
    },
    {
      id: 2,
      name: 'World',
      isComplete: false,
    },
  ];

  getAll() {
    return this.fuckingBliat;
  }

  createNewOne(dto: fuckingbliatDto) {
    this.fuckingBliat.push({
      ...dto,
      id: this.fuckingBliat.length,
    });

    return this.fuckingBliat;
  }

  deleteOne(elemId: string) {
    console.log(elemId, 'elemId');

    return this.fuckingBliat.filter(({ id }) => id !== +elemId);
  }
}
