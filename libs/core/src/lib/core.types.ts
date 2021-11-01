export interface IConfiguration {
	environment: 'development' | 'production' | 'test';
	backend_port: number;
	bcrypt_salt_rounds: number;
	jwt_secret: string;
}
