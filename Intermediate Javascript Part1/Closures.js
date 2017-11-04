1. A closure is when a function is able to access variables from an outer function which has already returned
2. One benefit is the use of private variables, a variable which can't be changed or overwritten. we can also create modules
3. A module is a piece of code that is encapsulated and can be reused easily. We wrap everything in an IIFE which contains private data
4. It is all the arguments which were passed to our function
5. It is called an arguments array because it looks like an array but isn't an array. 

function createCounter(){
	var counter = 0
	return function(){
		return counter += 1
	}
}