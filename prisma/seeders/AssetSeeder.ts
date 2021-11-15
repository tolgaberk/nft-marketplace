import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray, shuffleArray } from './helpers';
import { Seeder } from './seeder.types';

export class AssetSeeder extends Seeder<Prisma.AssetCreateInput> {
	seeder_name = 'Asset';
	async constructData(): Promise<Prisma.AssetCreateInput[]> {
		const products = await this.client.product.findMany();
		let productIds = products.map((prod) => prod.id);
		const arr = getArray(10).map(() => {
			shuffleArray(productIds);
			const asset: Prisma.AssetCreateInput = {
				folder: faker.system.directoryPath(),
				name: faker.system.commonFileName(),
				size: faker.datatype.number(90000),
				type: faker.system.commonFileType(),
				Product: { connect: { id: productIds[0] } },
			};
			productIds = productIds.splice(1);

			return asset;
		});
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.asset.deleteMany();
		const data = await this.constructData();
		for (const asset of data) {
			await this.client.asset.create({ data: asset });
		}
	}
}
