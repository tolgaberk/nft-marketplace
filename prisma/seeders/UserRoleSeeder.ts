import { Prisma } from '@prisma/client';
import * as faker from 'faker';
import { Role } from '../../libs/auth/src/lib/roles/role.enum';
import { Seeder } from './seeder.types';

export class UserRoleSeeder extends Seeder<Prisma.UserRoleCreateInput> {
	should_seed_on_prod = true;
	seeder_name = 'UserRole';
	constructData(): Prisma.UserRoleCreateInput[] {
		const userRoles = [];
		for (const role in Role) {
			userRoles.push({
				description: faker.lorem.paragraph(2),
				name: Role[role],
			} as Prisma.UserRoleCreateInput);
		}
		return userRoles;
	}
	async procedure(): Promise<void> {
		await this.client.userRole.deleteMany();
		const data = this.constructData();
		await this.client.userRole.createMany({ data });
	}
}
