// source code
var StringCalculator = {
	Add: function (number_string){
		var total = 0,
		numberArray = [];
		if(!number_string){
			return total;
		}
		if(number_string.indexOf(',\n') > 0){
			throw 'input is NOT ok';
		}
		numberArray = number_string.split(/,|\n/);
		for(var i = 0;i < numberArray.length;i++){
			if(numberArray[i]) {
				total += parseInt(numberArray[i]);
			}		
		}
		return total;
	}
}