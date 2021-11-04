import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { HeroSeeder } from './seeders/HeroSeeder';
import { Seeder } from './seeders/seeder.types';
import { UserRoleSeeder } from './seeders/UserRoleSeeder';
import { UserSeeder } from './seeders/UserSeeder';
const client = new PrismaClient();

const seeders: Seeder<any>[] = [
	new UserRoleSeeder(client),
	new UserSeeder(client),
	new HeroSeeder(client),
];

const main = async () => {
	dotenv.config();
	await client.$connect();

	for (const seeder of seeders) {
		await seeder.seed();
	}

	await client.$disconnect();
};

main();
