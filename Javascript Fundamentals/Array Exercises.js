var people = ["Greg", "Mary", "Devon", "James"]

for (var i =0; i<people.length; i++){
	console.log(people[i])
}

people.shift()

people.pop()

people.unshift("Matt")

people.push("Darien")

for(var i =0; i<people.length; i++){
	if(people[i]==="Mary"){
		console.log(people[i])
		break
	} else {
		console.log(people[i])
	}
}

pepole.slice(2)

people.indexOf("Mary")

people.indexOf("Foo")

people.splice(2,1, "Elizabeth", "Artie")

var withBob = people.concat("Bob")