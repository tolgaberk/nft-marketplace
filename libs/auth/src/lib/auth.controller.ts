import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserWithoutPass } from './entities/user.entity';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/local.guard';
import { RolesGuard } from './guards/role.guard';
import { Role } from './roles/role.enum';
import { Roles } from './roles/roles.decorator';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}
	@Post('register')
	async register(@Body() user: CreateUserDto) {
		return await this.authService.registerUser(user.email, user.password);
	}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Req() req: Request & { user: UserWithoutPass }) {
		return await this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Get('info')
	async info(@Req() req) {
		return req.user;
	}

	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Get('role-test')
	async admintest(@Req() req) {
		return req.user;
	}
}
