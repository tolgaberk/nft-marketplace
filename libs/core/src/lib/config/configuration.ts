import { IConfiguration } from '../core.types';

export const configuration = () =>
	({
		environment: process.env.NODE_ENV,
		backend_port: parseInt(process.env.BACKEND_PORT || '3000', 10),
		bcrypt_salt_rounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
		jwt_secret: process.env.JWT_SECRET,
	} as IConfiguration);
