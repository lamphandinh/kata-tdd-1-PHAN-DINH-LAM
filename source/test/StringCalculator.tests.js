// test
describe('StringCalculator object', function () {
	it('when emty string is used then return value is 0', function () {
		expect(StringCalculator.Add('')).toEqual(0);
    });
	it('when one number is used then return value is that same number', function () {
         expect(StringCalculator.Add('1')).toEqual(1);
    });
	it('when two numbers are used then return value is their sum', function () {
		expect(StringCalculator.Add('1,2')).toEqual(1 + 2);
	});
	it('when any number of numbers is used then return values are their sums', function () {
		expect(StringCalculator.Add('1,2,3,4,5,6')).toEqual(1 + 2 + 3 + 4 + 5 + 6);
	});
	it('when any number of numbers is used then return values are their sums', function () {
		expect(StringCalculator.Add('1,2,3,4,,6')).toEqual(1 + 2 + 3 + 4 + 6);
	});
	it('when new line is used between numbers then return values are their sums', function () {
		expect(StringCalculator.Add('1,2\n6')).toEqual(1 + 2 + 6);
	});
	it('when new line is used between numbers then return values are their sums', function () {
		expect(function () {
		  StringCalculator.Add('1,\n');
		}).toThrow('input is NOT ok');
	});
	it('when delimiter is specified then it is used to separate numbers', function () {
		expect(StringCalculator.Add('//;\n1;2')).toEqual(1 + 2);
	});
	it('when delimiter is specified then it is used to separate numbers', function () {
		expect(StringCalculator.Add('//?\n1?2')).toEqual(1 + 2);
	});
	it('when delimiter is specified then it is used to separate numbers', function () {
		expect(StringCalculator.Add('//??\n1??2??3')).toEqual(1 + 2 + 3);
	});
	it('when nagative number is used then throw exception', function () {
		expect(function () {
		  StringCalculator.Add('1,2,3,-4,5,6');
		}).toThrow('negatives not allowed : -4');
	});
	it('when nagative number is used then throw exception', function () {
		expect(function () {
		  StringCalculator.Add('1,-2,3,-4,-5,6');
		}).toThrow('negatives not allowed : -2,-4,-5');
	});
	it('when number is used great than 1000 then not add it', function () {
		expect(StringCalculator.Add('1,2,1000,1001,6')).toEqual(1 + 2 + 1000 + 6);
	});
	it('when multiple delimiters are specified then they are used to separate numbers', function () {
		expect(StringCalculator.Add('//[***]\n1***2***3')).toEqual(1 + 2 + 3);
	});
	it('when multiple delimiters are specified then they are used to separate numbers', function () {
		expect(StringCalculator.Add('//[***][%]\n1***2***3%4')).toEqual(1 + 2 + 3 + 4);
	});
});