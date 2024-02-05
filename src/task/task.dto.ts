import { IsString, IsBoolean } from 'class-validator';

export class TaskDto {
  @IsString()
  name: string;
  @IsBoolean()
  isComplete: boolean;
}
