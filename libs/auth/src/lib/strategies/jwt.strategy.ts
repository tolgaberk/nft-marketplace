import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { DataService } from '@tradist/data';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private dataService: DataService, config: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.get('jwt_secret'),
		});
	}

	async validate(payload: { sub: number; email: string }) {
		const { password, ...user } = await this.dataService.user.findFirst({
			where: { email: payload.email },
			include: { roles: true },
		});
		return user;
	}
}
