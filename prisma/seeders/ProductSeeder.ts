import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray, shuffleArray } from './helpers';
import { Seeder } from './seeder.types';

export class ProductSeeder extends Seeder<Prisma.ProductCreateInput> {
	seeder_name = 'Product';
	async constructData(): Promise<Prisma.ProductCreateInput[]> {
		const users = await this.client.user.findMany({
			where: { roles: { every: { name: 'user' } } },
		});
		let userIds = users.map((usr) => usr.id);
		const arr = getArray(10).map((): Prisma.ProductCreateInput => {
			shuffleArray(userIds);
			const product = {
				price: faker.datatype.float(),
				creator: { connect: { id: userIds[0] } },
			};
			userIds = userIds.splice(1);

			return product;
		});
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.product.deleteMany();
		const data = await this.constructData();
		for (const product of data) {
			await this.client.product.create({ data: product });
		}
	}
}
