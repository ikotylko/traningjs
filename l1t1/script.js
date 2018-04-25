function roots(a, b, c) {
	var D = b*b-4*a*c;
	
		if(D<0)
			{
				console.log('there are no roots!');
				return;
			}
			var x1 = (-b+Math.sqrt(D))/2*a;
			var x2 = (-b-Math.sqrt(D))/2*a;

	console.log('x1 = ' + x1);
	console.log('x2 = ' + x2);
}
// roots(1,1,7) (-2,-3,-4)