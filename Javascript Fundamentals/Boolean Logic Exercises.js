// Part 1
1. 2 == "2" - true
2. 2 === 2 - true
3. 10% 3 - 1
4. 10% 3 === 1 - true
5. true %% false - false
6. false || true - true
7. true || false - true

// Part 2
1. It should console.log "keep it up"
2. isLearning is already true so the if expression evaluates to be true. isLearning is a truthy value and it will be coerced

1. It should console.log third since the firstVariable has a falsey value but thirdVariable is truthy
2. firstVariable is undefined
3. It is falsey since undefined has a falsey value
4. secondVariable is falsey since an empty string is falsey
5. thirdVariable is truthy since it is a number

// Part 3
if (Math.random() > 0.5){
	console.log("over 0.5")
} else {
	console.log("under 0.5")
}

A falsey value is a value which isn't necessarily a boolean. But when inside a conditional statement it is evalued to false
0, udnefined, "", NaN, false, null