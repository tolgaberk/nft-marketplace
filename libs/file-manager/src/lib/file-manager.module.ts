import { Module } from '@nestjs/common';
import { CoreModule } from '@tradist/core';
import { FileManagerService } from './file-manager.service';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
@Module({
	imports: [CoreModule],
	controllers: [UploadController],
	providers: [FileManagerService, UploadService],
	exports: [FileManagerService, UploadService],
})
export class FileManagerModule {}
