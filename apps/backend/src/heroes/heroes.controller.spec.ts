import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from '@tradist/data';
import { HeroesController } from './Heroes.controller';
import { HeroesService } from './Heroes.service';

describe('HeroesController', () => {
	let controller: HeroesController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [HeroesController],
			providers: [HeroesService, DataService],
		})
			.overrideProvider(DataService)
			.useValue({})
			.compile();

		controller = module.get<HeroesController>(HeroesController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
