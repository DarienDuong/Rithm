// document.addEventListener("DOMContentLoaded", function(){
// 	var ul = document.querySelector("#todoList")

// 	var form = document.querySelector("#newTodoForm")

// 	var input = document.querySelector("#task") 

// 	var todoList = JSON.parse(localStorage.getItem("todo")) || []

// 	for(var i =0; i<todoList.length; i++){
// 		var li = document.createElement("li")
// 		li.innerText = todoList[i].name

// 		if(todoList[i].isComplete){
// 			li.style.textDecoration = "line-through"
// 		}
// 		ul.appendChild(li)
// 	}

// 	form.addEventListener("submit", function(event){
// 		event.preventDefault()
// 		var li = document.createElement("li")
// 		li.innerText = input.value

// 		var remove = document.createElement("button")
// 		remove.innerText = 'X'

// 		ul.appendChild(li)
// 		li.appendChild(remove)

// 		todoList.push({name: li.innerText , isComplete: false})
// 		localStorage.setItem("todo", JSON.stringify(todoList))	

// 		form.reset()
// 	})

// 	ul.addEventListener("click", function(event){
// 		if(event.target.tagName.toLowerCase() === "li"){
// 			event.target.style.textDecoration = "line-through"
// 		} else if (event.target.tagName.toLowerCase() === "button"){
// 			event.target.parentElement.remove()
// 		}
// 	})

// })


window.onload = function(){
    var todoForm = document.getElementById("newTodoForm");
    var todoList = document.getElementById("todoList");

    // retrieve from localStorage
    var savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    for(var i=0; i < savedTodos.length; i++){
        var newTodo = document.createElement("li");
        newTodo.innerText = savedTodos[i].task
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if(newTodo.isCompleted) {
            newTodo.style.textDecoration = "line-through";
        }
        todoList.appendChild(newTodo);
    }

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();
        var newTodo = document.createElement("li");
        var taskValue = document.getElementById("task").value;
        newTodo.innerText = taskValue;
        newTodo.isCompleted = false;
        todoForm.reset();
        todoList.appendChild(newTodo);

        // save to localStorage
        savedTodos.push({task: newTodo.innerText, isCompleted: false});
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    })

    todoList.addEventListener("click", function(event){
        var clickedListItem = event.target;

        if(!clickedListItem.isCompleted) {
            clickedListItem.style.textDecoration = "line-through";
            clickedListItem.isCompleted = true;
        } else {
            clickedListItem.style.textDecoration = "none";
            clickedListItem.isCompleted = false;
        }

        // breaks for duplicates - another option is to have dynamic IDs
        for(var i=0; i < savedTodos.length; i++){
            if(savedTodos[i].task === clickedListItem.innerText){
                savedTodos[i].isCompleted = clickedListItem.isCompleted;
                localStorage.setItem("todos", JSON.stringify(savedTodos));
            }
        }
    });
}
