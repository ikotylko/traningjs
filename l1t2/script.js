function isSimple(a) {
			if(a == 2 || a == 1)
			{
				console.log('True');
				return;
			}
			if(a%2==0)
			{
				console.log('False');
				return;
			}
			for (var i = 3; i < a; i+=2) {
				if(a%i==0){
					console.log('False');
					return;
				}
			}
			console.log('True');
		}
// isSimple(27)