import { constants, promises } from 'fs';
import * as path from 'path';
import { FileSystem } from '../types';
const { writeFile, access, mkdir, readFile } = promises;

export class LocalFileSystem implements FileSystem {
	async writeFile(path: string, content: string): Promise<unknown> {
		await this.ensureDirectoryExistence(path);
		return writeFile(path, content, { encoding: 'utf-8' });
	}
	async readFile(path: string): Promise<unknown> {
		if (!(await this.checkExists(path))) {
			throw new Error('file not found');
		}
		return await readFile(path);
	}

	private async ensureDirectoryExistence(filePath) {
		const dirname = path.dirname(filePath);
		await mkdir(dirname, { recursive: true });
		return true;
	}

	async checkExists(filePath: string) {
		try {
			await access(filePath, constants.F_OK);
			return true;
		} catch (error) {
			return false;
		}
	}
}
