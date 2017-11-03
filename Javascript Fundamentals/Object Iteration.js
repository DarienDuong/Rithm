var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (var key in namesAndHobbies){
	console.log(namesAndHobbies[key] + " => " + key)
}

namesAndHobbies.darien = "coding"

if("darien" in namesAndHobbies){
	console.log(namesAndHobbies.darien)
}