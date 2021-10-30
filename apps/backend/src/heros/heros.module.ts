import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import {DataModule} from '@tradist/data'

@Module({
  controllers: [HerosController],
  providers: [HerosService],
  imports:[DataModule]
})
export class HerosModule {}
