import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
			validationSchema,
		}),
	],
	controllers: [],
	providers: [],
	exports: [ConfigService],
})
export class CoreModule {}
