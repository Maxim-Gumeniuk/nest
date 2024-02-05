import { IsBoolean, IsString, IsInt } from 'class-validator';

export class fuckingbliatDto {
  @IsInt()
  id: number;
  @IsString()
  name: string;
  @IsBoolean()
  isComplete: boolean;
}
