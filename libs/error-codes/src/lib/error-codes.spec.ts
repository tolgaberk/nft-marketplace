import { errorCodes } from './error-codes';

describe('errorCodes', () => {
	it('should work', () => {
		expect(errorCodes()).toEqual('error-codes');
	});
});
