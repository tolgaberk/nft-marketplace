import { User as IUser } from '@prisma/client';
export class CreateUserDto
	implements Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>
{
	roleId: number;
	email: string;
	password: string;
}
