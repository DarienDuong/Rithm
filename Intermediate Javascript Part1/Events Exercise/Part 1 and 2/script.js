document.addEventListener("DOMContentLoaded", function(){
	var header = document.querySelector("#change_heading")
	header.innerHTML = "Hello World!"

	var section = document.querySelector("section")
	section.addEventListener("mouseover", function(event){
		var text = document.querySelector(".selected")
		text.innerText = event.target.className
	})

	var div = document.createElement("div")
	div.style.color = "purple"
	div.classList.add("purple")
	section.appendChild(div)

	// GAME

	var button = document.querySelector("button")
	var car1 = document.querySelector(".car1")
	var car2 = document.querySelector(".car2")

	car1.style.marginLeft = 0
	car2.style.marginLeft = 0

	function reset(car1Timer, car2Timer){
		clearInterval(car1Timer)
		clearInterval(car2Timer)
		car1.style.marginLeft = 0
		car2.style.marginLeft = 0
		button.disabled = false
	}

	button.addEventListener('click', function(event){
		button.disabled = true
		var car1Timer = setInterval(function(){
				car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px'
				if(parseInt(car1.style.marginLeft) > window.innerWidth){
					alert("Car 1 won")
					reset(car1Timer, car2Timer)
				}
			}, 60)

		var car2Timer = setInterval(function(){
				car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px'
				if(parseInt(car2.style.marginLeft) > window.innerWidth){
					alert("Car 2 won")
					reset(car1Timer, car2Timer)
				}
			}, 60)

	})

})