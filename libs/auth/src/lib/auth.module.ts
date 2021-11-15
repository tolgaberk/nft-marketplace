import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CoreModule } from '@tradist/core';
import { DataModule } from '@tradist/data';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
@Module({
	imports: [DataModule, PassportModule, registerJWTModule()],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtStrategy, PasswordService],
	exports: [AuthService],
})
export class AuthModule {}

//

function registerJWTModule() {
	return JwtModule.registerAsync({
		imports: [CoreModule],
		useFactory: async (configService: ConfigService) => {
			return {
				secret: configService.get<string>('jwt_secret'),
				signOptions: { expiresIn: '30m' },
			};
		},
		inject: [ConfigService],
	});
}
