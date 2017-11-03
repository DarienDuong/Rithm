// Part 1

function difference(num1, num2){
	return num1 - num2
}

function product(num1, num2){
	return num1 * num2
}

function printDay(num){
	var obj = {
		1: "Sunday",
		2: "Monday",
		3: "Tuesday",
		4: "Wednesday",
		5: "Thursday",
		6: "Friday",
		7: "Saturday"
	}

	return obj[num]
}


function lastElement(arr){
	return arr[arr.length -1]
}


function numberCompare(num1, num2){
	if(num1 > num2){
		return "First is greater"
	} else if (num2 > num1){
		return "Second is greater"
	} else {
		"Numbers are equal"
	}
}

function singleLetterCount(word, letter){
	var count = 0
	for(var i =0; i<word.length; i++){
		if(word[i].toLowerCase() === letter.toLowerCase()){
			count += 1
		}
	}
	return count
}

// Part 2

function multipleLetterCount(str){
	var obj = {}

	for (var i =0; i<str.length; i++){
		if(str[i] in obj){
			obj[str[i]] += 1
		} 
		obj[str[i]] = 1
	}

	return obj
}


function arrayManipulation(arr, command, location, value){
	if(command === "remove"){
		if(location === "end"){
			return arr.pop()
		} 
		arr.shift()
	} else {
		if(location === "end"){
			arr.push(value)
			return arr
		}
		arr.unshift(value)
		return arr
	}
}


function isPalindrome(str){
	for (var i =0; i <str.length; i ++){
		if(str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()){
			return false
		}
	}
	return true
}


// Part 3

function RPS(){

	function determineComputer(num){
		if (num <= 0.33){
			return "rock"
		} else if (num <= 0.66){
			return "paper"
		}
		return "scissor"
	}

	var userChoice = prompt("pick rock, paper, scissor").toLowerCase()

	var answer = ["rock", "paper", "scissor"]

	// if it was undefined it would have a falsey value. Opposite of that and it will evaluate to true
	if(!userChoice || answer.indexOf(userChoice) === -1){
		return "Please enter a valid option"
	}

	var computerChoice = determineComputer(Math.random())


	if (userChoice === computerChoice){
		return "Tie"
	} 

	if (userChoice === "rock" && computerChoice === "paper"){
		return "You lose, computer picked " + computerChoice
	}

	if (userChoice === "paper" && computerChoice === "scissor"){
		return "You lose, computer picked " + computerChoice
	}

	if (userChoice === "scissor" && computerChoice === "rock"){
		return "You lose, computer picked " + computerChoice
	}

	return "You win! Computer picked " + computerChoice
}
