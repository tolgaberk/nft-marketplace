import { Test, TestingModule } from '@nestjs/testing';
import { DataModule, DataService } from '@tradist/data';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
	let service: HeroesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [DataModule],
			providers: [HeroesService],
		})
			.overrideProvider(DataService)
			.useValue({})
			.compile();

		service = module.get<HeroesService>(HeroesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
