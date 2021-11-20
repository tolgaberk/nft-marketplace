import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { Role } from '../../libs/auth/src/lib/roles/role.enum';
import { getArray } from './helpers';
import { Seeder } from './seeder.types';
type CreateUser = Pick<Prisma.UserCreateInput, 'email' | 'password' | 'roles'>;

export class UserSeeder extends Seeder<CreateUser> {
	seeder_name = 'User';
	constructData(): CreateUser[] {
		const dummyUsers = getArray(10).map((usr, idx) => ({
			email: `user${idx}@test.com`,
			password: `user${idx}`,
			roles: { connect: [{ name: Role.User }] },
		}));
		const users = <CreateUser[]>[
			{
				email: 'admin@test.com',
				password: 'admin',
				roles: { connect: [{ name: Role.Admin }] },
			},
			...dummyUsers,
		];
		return users.map(this.hashUserPass);
	}

	async procedure(): Promise<void> {
		await this.client.user.deleteMany();
		const data = this.constructData();
		for (const user of data) {
			await this.client.user.create({ data: user });
		}
	}

	private hashUserPass(u: CreateUser): CreateUser {
		const hashedPass = hashSync(
			u.password,
			Number(process.env.BCRYPT_SALT_ROUNDS),
		);
		u.password = hashedPass;
		return u;
	}
}
