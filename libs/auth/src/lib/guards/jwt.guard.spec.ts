import { JwtAuthGuard } from './jwt.guard';

describe('JWTAuthGuard', () => {
	it('should be defined', () => {
		expect(new JwtAuthGuard()).toBeDefined();
	});
});
