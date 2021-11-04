export interface FileSystem {
	writeFile(path: string, content): Promise<unknown>;
	readFile(path: string): Promise<unknown>;
}
