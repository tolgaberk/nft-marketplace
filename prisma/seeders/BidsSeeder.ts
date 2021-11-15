import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { getArray, shuffleArray } from './helpers';
import { Seeder } from './seeder.types';

export class BidsSeeder extends Seeder<Prisma.BidCreateInput> {
	seeder_name = 'Bids';
	async constructData(): Promise<Prisma.BidCreateInput[]> {
		const products = await this.client.product.findMany();
		const users = await this.client.user.findMany({
			where: { roles: { every: { name: 'user' } } },
		});
		let productIds = products.map((prod) => prod.id);
		let userIds = users.map((usr) => usr.id);
		const arr = getArray(20).map((_, idx) => {
			if (idx % 2 === 1) {
				shuffleArray(productIds);
				shuffleArray(userIds);
			}

			const endDate = new Date();
			endDate.setDate(endDate.getDate() + 2);
			const bid: Prisma.BidCreateInput = {
				bidder: { connect: { id: userIds[0] } },
				price: faker.datatype.float(5),
				product: { connect: { id: productIds[0] } },
				endDate,
			};

			if (idx % 2 === 1) {
				productIds = productIds.splice(1);
				userIds = userIds.splice(1);
			}

			return bid;
		});
		return arr;
	}
	async procedure(): Promise<void> {
		await this.client.bid.deleteMany();
		const data = await this.constructData();
		for (const bid of data) {
			await this.client.bid.create({ data: bid });
		}
	}
}
