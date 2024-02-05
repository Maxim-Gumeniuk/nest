import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FuckingbliatService } from './fuckingbliat.service';
import { fuckingbliatDto } from './fuckingbliat.dto';

@Controller('fuckingbliat')
export class FuckingbliatController {
  constructor(private readonly fuckingbliatService: FuckingbliatService) {}

  @Get()
  async getAll() {
    return this.fuckingbliatService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: fuckingbliatDto) {
    return this.fuckingbliatService.createNewOne(dto);
  }

  @Delete(':id')
  async deleteEntity(@Param('id') id: string) {
    console.log(id, 'id');

    return this.fuckingbliatService.deleteOne(id);
  }
}
