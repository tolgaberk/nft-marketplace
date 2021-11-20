import { UserRole, User as IUser } from '@prisma/client';

export class User implements IUser {
	roles: UserRole[];
	id: number;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

export type UserWithoutPass = Omit<User, 'password'>;
