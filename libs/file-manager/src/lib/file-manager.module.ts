import { Module } from '@nestjs/common';
import { CoreModule } from '@tradist/core';
import { FileManagerService } from './file-manager.service';
@Module({
	imports: [CoreModule],
	controllers: [],
	providers: [FileManagerService],
	exports: [FileManagerService],
})
export class FileManagerModule {}
