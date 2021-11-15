import { Module } from '@nestjs/common';
import { DataModule } from '@tradist/data';
import { AssetsModule } from '../assets/assets.module';
import { BidsModule } from '../bids/bids.module';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

@Module({
	controllers: [HeroesController],
	providers: [HeroesService],
	imports: [DataModule, AssetsModule, BidsModule],
})
export class HeroesModule {}
