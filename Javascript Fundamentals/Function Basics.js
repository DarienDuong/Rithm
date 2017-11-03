function myName(){
	var fullName = prompt("What is your name?")
	console.log(fullName)
}

favoriteFoods = ["pizza", "ice cream"]

favoriteFoods[Math.round(Math.random())]

var numbers = []
for(var i=1; i<=10; i++){
	numbers.push(i)
}


function displayOddNumbers(){
	for (var i =0; i<numbers.length; i++){
		if(numbers[i] % 2 === 1){
			console.log(numbers[i])
		}
	}
}

function displayEvenNumbers(){
	for (var i =0; i<numbers.length; i++){
		if(numbers[i] % 2 === 0){
			console.log(numbers[i])
		}
	}
}


function returnFirstEvenNumber(){
	for (var i =0; i<numbers.length; i++){
		if(numbers[i] % 2 === 0){
			return numbers[i]
		}
	}
}

function returnFirstHalf(){
	return numbers.slice(0,numbers.length/2)
}

function returnSecondHalf(){
	return numbers.slice(number.length/2)
}

