document.addEventListener("DOMContentLoaded", function(){
	var ul = document.querySelector("#todoList")

	var form = document.querySelector("#newTodoForm")

	var input = document.querySelector("#task") 

	form.addEventListener("submit", function(event){
		event.preventDefault()
		var li = document.createElement("li")
		li.innerText = input.value

		var remove = document.createElement("button")
		remove.innerText = 'X'

		ul.appendChild(li)
		li.appendChild(remove)

		form.reset()
	})

	ul.addEventListener("click", function(event){
		if(event.target.tagName.toLowerCase() === "li"){
			event.target.style.textDecoration = "line-through"
		} else if (event.target.tagName.toLowerCase() === "button"){
			event.target.parentElement.remove()
		}
	})

})