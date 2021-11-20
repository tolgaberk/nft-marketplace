import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfiguration } from '@tradist/core';
import { ErrorCodes } from '@tradist/error-codes';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
	private rounds: number;
	constructor(private config: ConfigService<IConfiguration>) {
		this.rounds = this.config.get('bcrypt_salt_rounds');
	}

	async hashPass(plainPass: string): Promise<string> {
		return await hash(plainPass, this.rounds);
	}

	async validatePass(plainPass: string, hashedPass: string): Promise<true> {
		const result = await compare(plainPass, hashedPass);
		if (result) return true;
		throw new UnauthorizedException(
			`${ErrorCodes.WRONG_PASSWORD}`,
			'Wrong Password',
		);
	}
}
