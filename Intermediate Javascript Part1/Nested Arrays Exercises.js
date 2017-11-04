function rotate(arr, num){
	for(var i =0; i < num; i++){
		arr.unshift(arr.pop())
	}
	return arr
}

function makeXOGrid(row, column){
	var startWithX = true
	var output = []
	for(var i =0; i < row; i++){
		var nestedArray = []
		for(var j=0; j<column; j++){
			if(startWithX){
				nestedArray.push("X")
			} else {
				nestedArray.push("Y")
			} 
			// inverse the variable so it can alternate between X and Y
			// this code will always run
			startWithX = !startWithX
		}
		output.push(nestedArray)
	}
	return output
}