// source code
var StringCalculator = {
	Add: function (number_string){
		var total = 0,
		numberArray = [],
		step3Excep = ',\n',
		delimiter = /,|\n/,
		start_string_contain_spec_delimiter = '//',
		string_after_delimiter = number_string;
		
		// string empty
		if(!number_string){
			return total;
		}
		// step 3 exception
		if(number_string.indexOf(step3Excep) > 0){
			throw 'input is NOT ok';
		}
		
		// if string start with spec delimiter
		if(number_string.indexOf(start_string_contain_spec_delimiter) === 0){
			var index_start_delimiter = 2; // hardcode - because in scope be sure start with // 
			var index_end_delemiter = number_string.indexOf('\n');
			delimiter = number_string.substring(index_start_delimiter,index_end_delemiter);
			string_after_delimiter = number_string.substring(index_end_delemiter+1);
		}
		else {
			
		}
		
		numberArray = string_after_delimiter.split(delimiter);
		for(var i = 0;i < numberArray.length;i++){
			if(numberArray[i]) {
				total += parseInt(numberArray[i]);
			}		
		}
		return total;
	}
}