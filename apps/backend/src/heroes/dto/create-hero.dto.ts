import { Hero as IHero } from '@prisma/client';
export class CreateHeroDto implements Omit<IHero, 'id'> {
	productId: number | null;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	description: string;
}
