// source code
var StringCalculator = {
	Add: function (number_string){
		var total = 0;
		if(!number_string){
			return total;
		}
		total += parseInt(number_string);
		return total;
	}
}