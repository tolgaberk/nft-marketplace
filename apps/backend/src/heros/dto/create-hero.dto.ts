import { Hero as IHero } from '@prisma/client';
export class CreateHeroDto implements Omit<IHero, 'id'> {
	createdAt: Date;
	updatedAt: Date;
	title: string;
	description: string;
}
