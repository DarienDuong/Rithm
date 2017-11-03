function add(num1, num2){
	return num1 + num2
}

function multiply(num1, num2){
	return num1 * num2
}

function subtract(num1, num2){
	return num1 - num2
}

function multiply(num1, num2){
	return num1 * num2
}

function divide(num1, num2){
	return num1 / num2
}

function sayHello(name){
	if(name==="Darien"){
		return "Hello Boss"
	} else {
		return "Hello " + name
	}
}

function average(arr){
	var count = 0 
	for(var i =0; i<arr.length; i++){
		count += i
	}
	return count / arr.length
}

function createStudent(first, last){
	return {
		firstName: first,
		lastName: last
	}
}

var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

function findStudentByFirstName(first){
	var lowerFirst = first.toLowerCase()
	for(var i =0; i<students.length; i++){
		if (students[i]["firstName"].toLowerCase() === lowerFirst) {
			return true
		} else {
			return false
		}
	}
}

function extractEveryThird(arr){
	
	var newArr = []

	for(var i = 2; i<arr.length; i += 3){
		newArr.push(arr[i])
	}
	return newArr
}


function countEvensAndOdds(arr){
	var output = {
		oddCount: 0,
		evenCount: 0
	}

	for(var i =0; i<arr.length; i++){
		if(arr[i] % 2 === 1){
			output.oddCount += 1
		} else {
			output.evenCount += 1
		}
	}

	return output
}


It should return "Hello from global" for both

function onlyCapitalLetters(str){
	var output = ""

	for(var i =0; i<str.length; i++){
		if(str[i] === str[i].toUpperCase()){
			output += str[i]
		}
	}

	return output
}

