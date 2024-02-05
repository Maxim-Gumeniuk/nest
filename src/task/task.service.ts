import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private TASKS = [
    {
      name: 'test_1',
      isComplete: false,
    },
  ];
  getAll() {
    return this.TASKS;
  }

  create(dto: TaskDto) {
    this.TASKS.push(dto);
    return this.TASKS;
  }
}
