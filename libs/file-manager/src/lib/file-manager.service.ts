import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfiguration } from '@tradist/core';
import { AwsFileSystem } from './aws/file-system';
import { LocalFileSystem } from './local/file-system';
import { FileSystem } from './types';

@Injectable()
export class FileManagerService {
	fs: FileSystem;
	constructor(private config: ConfigService<IConfiguration>) {
		const fileSystem = config.get<IConfiguration['file_system']>('file_system');
		switch (fileSystem) {
			case 'aws':
				this.fs = new AwsFileSystem();
				break;
			case 'local':
				this.fs = new LocalFileSystem();
				break;
			default:
				this.fs = new LocalFileSystem();
				break;
		}
	}
}
