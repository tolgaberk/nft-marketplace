import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray } from './helpers';
import { Seeder } from './seeder.types';

export class ProductSeeder extends Seeder<Prisma.ProductCreateInput> {
	seeder_name = 'Hero';
	constructData(): Prisma.ProductCreateInput[] {
		const arr = getArray(10).map(() => ({
			price: faker.datatype.float({ min: 0, max: 20, precision: 4 }),
		}));
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.product.deleteMany();
		const data = this.constructData();
		await this.client.product.createMany({ data });
	}
}
