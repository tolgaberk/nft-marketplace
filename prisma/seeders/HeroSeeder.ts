import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray, getRandomNUm as getRandomNum } from './helpers';
import { Seeder } from './seeder.types';

export class HeroSeeder extends Seeder<Prisma.HeroCreateInput> {
	seeder_name = 'Hero';
	async constructData(): Promise<Prisma.HeroCreateInput[]> {
		const products = await this.client.product.findMany();
		products.sort((a, b) => b.id - a.id);
		const randomId = getRandomNum(1, products[0].id);
		const arr = getArray(10).map(
			() =>
				({
					product: { connect: { id: randomId } },
					title: faker.commerce.productName(),
					description: faker.commerce.productDescription(),
				} as Prisma.HeroCreateInput),
		);
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.hero.deleteMany();
		const data = await this.constructData();
		await this.client.hero.createMany({ data });
	}
}
