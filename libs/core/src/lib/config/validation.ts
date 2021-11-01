import * as Joi from 'joi';

export const validationSchema = Joi.object({
	NODE_ENV: Joi.string()
		.valid('development', 'production', 'test')
		.required()
		.default('development'),
	BACKEND_PORT: Joi.number().default(3000),
	BCRYPT_SALT_ROUNDS: Joi.number().default(10),
	JWT_SECRET: Joi.string().required(),
});
