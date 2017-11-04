function each(arr, cb){
	for(var i =0; i<arr.length; i++){
		cb(arr[i])
	}
}

function map(arr, cb){
	var newArr = []
	for(var i=0; i<arr.length; i++){
		newArr.push(cb(arr[i]))
	}
	return newArr
}

function reject(arr, cb){
	var newArr = []
	for(var i =0; i<arr.length; i++){
		if(!cb(arr[i])){
			newArr.push(arr[i])
		}
	}
	return newArr
}