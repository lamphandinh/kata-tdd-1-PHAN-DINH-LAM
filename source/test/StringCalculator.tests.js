// test
describe('StringCalculator object', function () {
	it('when emty string is used then return value is 0', function () {
		expect(StringCalculator.Add('')).toEqual(0);
    });
	it('when one number is used then return value is that same number', function () {
         expect(StringCalculator.Add('1')).toEqual(1);
    });
});