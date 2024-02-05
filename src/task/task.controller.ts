import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.getTasks();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() dto: TaskDto) {
    return this.createTask(dto);
  }
}
