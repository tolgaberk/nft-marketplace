import { Hero as IHero } from '@prisma/client';
export class CreateHeroDto implements Omit<IHero, 'id'> {
	title: string;
	description: string;
}
