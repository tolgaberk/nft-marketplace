import { IConfiguration } from '../core.types';

export const configuration = (): IConfiguration => ({
	environment: process.env.NODE_ENV as IConfiguration['environment'],
	backend_port: parseInt(process.env.BACKEND_PORT || '3000', 10),
	bcrypt_salt_rounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
	jwt_secret: process.env.JWT_SECRET,
	file_system: process.env.FILE_SYSTEM as IConfiguration['file_system'],
});
