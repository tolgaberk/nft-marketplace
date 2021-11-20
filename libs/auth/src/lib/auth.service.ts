import {
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DataService } from '@tradist/data';
import { ErrorCodes } from '@tradist/error-codes';
import { UserWithoutPass } from './entities/user.entity';
import { PasswordService } from './password.service';

type AuthResult = { access_token: string };

@Injectable()
export class AuthService {
	constructor(
		private dataService: DataService,
		private passwordService: PasswordService,
		private jwtService: JwtService,
	) {}

	async validateUser(
		email: string,
		plainPass: string,
	): Promise<UserWithoutPass | null> {
		const user = await this.dataService.user.findUnique({
			where: { email },
			include: { roles: true },
		});

		if (!user) {
			throw new NotFoundException(
				ErrorCodes.NOT_FOUND_ERROR,
				`User Not found with email ${email}`,
			);
		}

		if (await this.passwordService.validatePass(plainPass, user.password)) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async registerUser(email: string, plainPass: string): Promise<AuthResult> {
		const existingUserCount = await this.dataService.user.count({
			where: { email },
		});
		if (existingUserCount) {
			throw new ConflictException(
				ErrorCodes.ACCOUNT_ALREADY_EXISTS,
				`User already exists with email: ${email}`,
			);
		}

		const password = await this.passwordService.hashPass(plainPass);
		const { password: _, ...result } = await this.dataService.user.create({
			data: { email, password },
		});

		return await this.login(result as UserWithoutPass);
	}

	async login(user: UserWithoutPass): Promise<AuthResult> {
		const payload = { email: user.email, sub: user.id, roles: user.roles };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
