// source code
var StringCalculator = {
	Add: function (number_string){
		var total = 0,
		numberArray = [],
		step3Excep = ',\n',
		delimiter = /,|\n/;
		if(!number_string){
			return total;
		}
		if(number_string.indexOf(step3Excep) > 0){
			throw 'input is NOT ok';
		}
		numberArray = number_string.split(delimiter);
		for(var i = 0;i < numberArray.length;i++){
			if(numberArray[i]) {
				total += parseInt(numberArray[i]);
			}		
		}
		return total;
	}
}