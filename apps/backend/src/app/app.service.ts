import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getUptime(): { uptime: number } {
		return { uptime: process.uptime() };
	}
}
