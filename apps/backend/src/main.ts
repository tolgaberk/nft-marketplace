/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = app.get(ConfigService);

	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);

	const port = config.get('BACKEND_PORT');

	await app.listen(port, () => {
		Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
		Logger.log(
			'Listening at http://localhost:' + port + '/graphql for GraphQL',
		);
		Logger.log(`Running in ${config.get('environment')} mode`);
	});
}

bootstrap();
