import { Hero as IHero } from '.prisma/client';

export class Hero implements IHero {
	createdAt: Date;
	updatedAt: Date;
	id: number;
	title: string;
	description: string;
}
