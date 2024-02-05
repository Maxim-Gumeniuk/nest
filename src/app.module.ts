import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { FuckingbliatModule } from './fuckingbliat/fuckingbliat.module';

@Module({
  imports: [TaskModule, FuckingbliatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
