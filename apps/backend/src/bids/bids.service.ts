import { Bid, Product } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { DataService } from '@tradist/data';

@Injectable()
export class BidsService {
	constructor(private dataService: DataService) {}

	async getHighestBidOf<T>(
		product: Product,
	): Promise<Product & { highestBid: Bid } & T> {
		const productWithHighestBid = await this.dataService.product.findFirst({
			where: { id: product.id },
			include: { bids: { orderBy: { price: 'desc' }, take: 1 } },
		});
		const highestBid = productWithHighestBid.bids[0];
		delete productWithHighestBid.bids;
		const typedProduct = productWithHighestBid as unknown as Product & {
			highestBid: Bid;
		};
		typedProduct.highestBid = highestBid;

		return typedProduct as Product & { highestBid: Bid } & T;
	}
}
