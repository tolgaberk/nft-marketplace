import { FileSystem } from '../types';

export class AwsFileSystem implements FileSystem {
	writeFile(path: string, content: any): Promise<unknown> {
		throw new Error('Method not implemented.');
	}
	readFile(path: string): Promise<unknown> {
		throw new Error('Method not implemented.');
	}
}
