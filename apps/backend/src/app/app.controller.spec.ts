import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();
	});

	describe('uptime', () => {
		it('should return uptime', () => {
			const appController = app.get<AppController>(AppController);
			expect(appController.uptime()).toHaveProperty('uptime');
			expect(!isNaN(appController.uptime().uptime)).toBeTruthy();
		});
	});
});
