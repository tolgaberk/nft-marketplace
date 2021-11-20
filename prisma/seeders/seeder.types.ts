import { PrismaClient } from '@prisma/client';
import { blue, green } from 'chalk';
export abstract class Seeder<T> {
	protected should_seed_on_prod: boolean;
	protected seeder_name: string;
	constructor(protected client: PrismaClient) {}
	async seed() {
		console.log(blue(`Seeding ${this.seeder_name} 🚀`));
		if (process.env.NODE_ENV !== 'production' || this.should_seed_on_prod)
			await this.procedure();
		console.log(green(`${this.seeder_name} ✅`));
	}
	abstract procedure(): Promise<unknown>;
	abstract constructData(): Partial<T>[] | Promise<Partial<T>[]>;
}
