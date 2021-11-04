import { Module } from '@nestjs/common';
import { DataModule } from '@tradist/data';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

@Module({
	controllers: [HeroesController],
	providers: [HeroesService],
	imports: [DataModule],
})
export class HeroesModule {}
