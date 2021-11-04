import { Module } from '@nestjs/common';
import { DataModule } from '@tradist/data';
import { HeroesController } from './Heroes.controller';
import { HeroesService } from './Heroes.service';

@Module({
	controllers: [HeroesController],
	providers: [HeroesService],
	imports: [DataModule],
})
export class HeroesModule {}
