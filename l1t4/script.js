function reverse(s){
		    var str = s.toString();
		    var result = '';

		    for (var i = str.length - 1; i >= 0; i--) {
		    	result+=str[i];
		    }
		    console.log(result);

		    return result;
		}