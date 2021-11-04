import { Module } from '@nestjs/common';
import { FileManagerService } from './file-manager.service';

@Module({
	controllers: [],
	providers: [FileManagerService],
	exports: [FileManagerService],
})
export class FileManagerModule {}
