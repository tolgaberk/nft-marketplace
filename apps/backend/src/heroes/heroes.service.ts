import { Injectable } from '@nestjs/common';
import { Bid, Hero, Prisma, Product, User } from '@prisma/client';
import { DataService } from '@tradist/data';
import { AssetsService, AssetWithPath } from '../assets/assets.service';
import { BidsService } from '../bids/bids.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroesService {
	constructor(
		private dataService: DataService,
		private assetService: AssetsService,
		private bidsService: BidsService,
	) {}
	create(createHeroDto: CreateHeroDto) {
		return this.dataService.hero.create({ data: createHeroDto });
	}

	async findAll() {
		const heroes = await this.dataService.hero.findMany({
			include: { product: { include: { asset: true, creator: true } } },
		});

		return this.formatHeroForHeroSection(heroes);
	}

	private formatHeroForHeroSection(
		heroes: Array<
			Prisma.HeroGetPayload<{
				include: { product: { include: { asset: true; creator: true } } };
			}>
		>,
	) {
		return Promise.all(
			heroes.map(async (hero) => {
				const typedHero = hero as Hero & {
					product: Product & {
						creator: User;
						asset: AssetWithPath;
						highestBid?: Bid;
					};
				};
				typedHero.product.asset.path = this.assetService.constructPath(
					hero.product.asset,
				);

				typedHero.product = await this.bidsService.getHighestBidOf(
					typedHero.product,
				);

				return typedHero;
			}),
		);
	}

	findOne(id: number) {
		return this.dataService.hero.findUnique({ where: { id } });
	}

	update(id: number, updateHeroDto: UpdateHeroDto) {
		return this.dataService.hero.update({ where: { id }, data: updateHeroDto });
	}

	remove(id: number) {
		return this.dataService.hero.delete({ where: { id } });
	}
}
