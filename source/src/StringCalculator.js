// source code
var StringCalculator = {
	Add: function (number_string){
		var total = 0,
		step3Excep = ',\n',
		delimiter = /,|\n/,
		delimiter_regex = delimiter,
		multi_delimiter = [],		
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
			
			var open_regex_str = '\\[';
			var open_regex = new RegExp(open_regex_str,"gi");
			delimiter = delimiter.replace(open_regex,'');
			var close_regex_str = '\\]';
			var close_regex = new RegExp(close_regex_str,"gi");			
			delimiter = delimiter.replace(close_regex,',');
			
			multi_delimiter = delimiter.split(/,/);
			if(multi_delimiter.length > 1){
				var multi_delimiter_string = multi_delimiter.join('|');
				multi_delimiter_string = multi_delimiter_string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$]/g, "\\$&");
				multi_delimiter_string = multi_delimiter_string.substring(0,multi_delimiter_string.length-1);

				delimiter_regex = new RegExp(multi_delimiter_string,"g");
			}
			else if(multi_delimiter.length > 0) {
				delimiter_regex = multi_delimiter[0];				
			}
		}
		else {
			
		}
		
		total = StringCalculator.CountSumAfterSlit(string_after_delimiter,delimiter_regex);
		return total;
	},
	CountSumAfterSlit: function (numbers,delimiters){
		var sum = 0,
		nagative_number = [];
		
		var numberArray = numbers.split(delimiters);
		for(var i = 0;i < numberArray.length;i++){
			var num = numberArray[i];
			if(num) {
				if(parseInt(num) < 0){
					nagative_number.push(num);
				}
				if(parseInt(num) <= 1000){
					sum += parseInt(num);
				}				
			}		
		}
		if(nagative_number.length > 0){
			throw 'negatives not allowed : ' + nagative_number.join(',');
		}

		return sum;
	}
}