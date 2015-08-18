// source code
var StringCalculator = {
	Add: function (number_string){
		var total = 0,
		numberArray = [];
		if(!number_string){
			return total;
		}
		numberArray = number_string.split(',');
		for(var i = 0;i < numberArray.length;i++){
			if(numberArray[i]) {
				total += parseInt(numberArray[i]);
			}		
		}
		return total;
	}
}