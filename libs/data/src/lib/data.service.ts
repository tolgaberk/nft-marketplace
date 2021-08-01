import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DataService extends PrismaClient implements OnModuleInit {
	constructor() {
		super();
	}
	public async onModuleDestroy() {
		await this.$disconnect();
	}

	public async onModuleInit() {
		await this.$connect();
	}
}
