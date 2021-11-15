import { Hero as IHero } from '.prisma/client';

export class Hero implements IHero {
	productId: number | null;
	createdAt: Date;
	updatedAt: Date;
	id: number;
	title: string;
	description: string;
}
