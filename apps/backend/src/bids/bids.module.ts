import { Module } from '@nestjs/common';
import { DataModule } from '@tradist/data';
import { BidsService } from './bids.service';

@Module({
	imports: [DataModule],
	providers: [BidsService],
	exports: [BidsService],
})
export class BidsModule {}
