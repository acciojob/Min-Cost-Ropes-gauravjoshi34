function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length<1){
		return 0;
	}

	let totalcost = 0;
	arr.sort((a,b)=>a-b);
	while(arr.length<1){
		let firstrope = arr.shift();
		let secondrope = arr.shift();

		let newrope = firstrope + secondrope;

		totalcost+=newrope;

		arr.push(newrope);
		arr.sort((a,b)=>a-b);
	}

	return totalcost;
  
}

module.exports=mincost;
