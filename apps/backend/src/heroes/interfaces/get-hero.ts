import { Prisma } from '.prisma/client';
import { Hero } from '../entities/hero.entity';

export type GetHeroesResponse = Array<GetHeroResponse>;
export interface GetHeroResponse extends Hero {
	product?: Prisma.ProductGetPayload<{ include: { bids: true; assset: true } }>;
}
