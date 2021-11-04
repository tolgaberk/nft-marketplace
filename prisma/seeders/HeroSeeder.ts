import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray } from './helpers';
import { Seeder } from './seeder.types';

export class HeroSeeder extends Seeder<Prisma.HeroCreateInput> {
	seeder_name = 'Hero';
	constructData(): Prisma.HeroCreateInput[] {
		const arr = getArray(10).map(() => ({
			title: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
		}));
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.hero.deleteMany();
		const data = this.constructData();
		await this.client.hero.createMany({ data });
	}
}
