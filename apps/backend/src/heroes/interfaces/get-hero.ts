import { Product } from '.prisma/client';
import { AssetWithPath } from '../../assets/assets.service';
import { Hero } from '../entities/hero.entity';

export type GetHeroesResponse = Array<GetHeroResponse>;
export interface GetHeroResponse extends Hero {
	product: Product & { asset: AssetWithPath };
}
