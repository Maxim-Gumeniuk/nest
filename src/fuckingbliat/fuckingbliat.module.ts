import { Module } from '@nestjs/common';
import { FuckingbliatService } from './fuckingbliat.service';
import { FuckingbliatController } from './fuckingbliat.controller';

@Module({
  controllers: [FuckingbliatController],
  providers: [FuckingbliatService],
})
export class FuckingbliatModule {}
