import { Test } from '@nestjs/testing';
import { FileManagerService } from './file-manager.service';

describe('FileManagerService', () => {
	let service: FileManagerService;

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			providers: [FileManagerService],
		}).compile();

		service = module.get(FileManagerService);
	});

	it('should be defined', () => {
		expect(service).toBeTruthy();
	});
});
