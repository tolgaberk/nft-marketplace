import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray, shuffleArray } from './helpers';
import { Seeder } from './seeder.types';

export class HeroSeeder extends Seeder<Prisma.HeroCreateInput> {
	seeder_name = 'Hero';
	async constructData(): Promise<Prisma.HeroCreateInput[]> {
		const products = await this.client.product.findMany();
		let productIds = products.map((prod) => prod.id);
		const arr = getArray(10).map((): Prisma.HeroCreateInput => {
			shuffleArray(productIds);
			const hero = {
				product: { connect: { id: productIds[0] } },
				title: faker.commerce.productName(),
				description: faker.commerce.productDescription(),
			};
			productIds = productIds.splice(1);

			return hero;
		});
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.hero.deleteMany();
		const data = await this.constructData();
		for (const hero of data) {
			await this.client.hero.create({ data: hero });
		}
	}
}
