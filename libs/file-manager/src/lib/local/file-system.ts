import { constants, promises } from 'fs';
import { FileSystem } from '../types';
import path = require('path');
const { writeFile, access, mkdir, readFile } = promises;
export class LocalFileSystem implements FileSystem {
	async writeFile(path: string, content: any): Promise<unknown> {
		return writeFile(path, content, { encoding: 'utf-8' });
	}
	async readFile(path: string): Promise<unknown> {
		return await this.checkExists(path);
	}

	private async ensureDirectoryExistence(filePath) {
		const dirname = path.dirname(filePath);
		if (this.checkExists(dirname)) {
			return true;
		}
		this.ensureDirectoryExistence(dirname);
		await mkdir(dirname);
	}

	async checkExists(file) {
		try {
			await access(file, constants.F_OK);
			return true;
		} catch (error) {
			return false;
		}
	}
}
