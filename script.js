const todoInput = document.querySelector('.todo-input');
const todobtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value !== "") {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // list item
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // complete button
        const compBtn = document.createElement("button");
        compBtn.innerHTML = '<i class="fas fa-check"><i>';
        compBtn.classList.add("comp-btn");
        todoDiv.appendChild(compBtn);

        // trash button
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class="fas fa-trash"><i>';
        trashBtn.classList.add("trash-btn");
        todoDiv.appendChild(trashBtn);

        // append todoDiv
        todoList.appendChild(todoDiv);

        // remove todoInput value
        todoInput.value = "";

        // remove todo list
        trashBtn.addEventListener('click', () => {
            todoDiv.classList.add('fall')
            todoDiv.addEventListener('transitionend', () => {
                todoDiv.remove();
            })
        })

        // check list completed 
        compBtn.addEventListener('click', () => {
            todoDiv.classList.toggle("completed");
        })

    } else {
        alert("Please enter any Task!")        
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}

todobtn.addEventListener('click', addTodo);
filterOption.addEventListener('click', filterTodo)