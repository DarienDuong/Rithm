function countdown(num){
	var timer = setInterval(function(){
		num -= 1
		if(num > 0){
			console.log(num)
		} else {
			console.log("DONE!")
			clearInterval(timer)
		}
	}, 1000)
}


function randomGame(){
	var counter = 0
	var timer = setInterval(function(){
		var random = Math.random()
		counter += 1
		if(random > 0.75){
			clearInterval(timer)
			console.log("It took " + counter + " of times")
		}
	}, 1000)
}

function isEven(num){
	return num % 2 === 0
}

function isOdd(num){
	return num % 2 !== 0 
}

function isPrime(num){
	if(num <= 1){
		return false
	}
	for(var i = num -1; i > 1; i--){
		if (num % i === 0){
			return false
		} return true
	}
}

function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function numberFact(num, cb){
	return cb(num)
}

function find(arr, cb){
	for(var i=0; i<arr.length; i++){
		if(cb(arr[i])){
			return arr[i]
		}
	}
}

function findIndex(arr, cb){
	for(var i=0; i<arr.length; i++){
		if(cb(arr[i])){
			return i
		}
	}
}


function specialMultiply(a,b){
	if(arguments.length >1){
		return a * b
	} else{
		return function(b){
			a*b
		}
	}
}




