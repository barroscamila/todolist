/* 
    FALTANDO:
    - função de alterar tema dark/light
    - media queries
*/

// SELECIONANDO ELEMENTOS

let list = document.querySelector("#todoList")

// FUNÇÕES

function addNewTodo(todo) {
    const newTodo = document.createElement("div")
    newTodo.classList.add("newTodo")
    
    const doneIcon = document.createElement("span")
    doneIcon.classList.add("material-symbols-outlined")
    doneIcon.id = "doneIcon"
    doneIcon.innerText = "done"
    newTodo.appendChild(doneIcon)

    const todoTxt = document.createElement("span")
    todoTxt.id = "todoTxt"
    todoTxt.innerText = todo
    newTodo.appendChild(todoTxt)

    const deleteIcon = document.createElement("span")
    deleteIcon.classList.add("material-symbols-outlined")
    deleteIcon.id = "deleteIcon"
    deleteIcon.innerText = "delete"
    newTodo.appendChild(deleteIcon)

    list.appendChild(newTodo)
}

function checkTodo(icon) {
    const answer = confirm("Tem certeza que deseja marcar este item como finalizado?")
    const todoChecked = icon.parentNode
    todoChecked.children[1].id = "doneTxtClicked"
    
    if (answer) {
        icon.id = "doneIconClicked"
    }
}

function deleteTodo(icon) {
    const answer = confirm("Tem certeza que deseja deletar este item da lista?")
    const todoToDelete = icon.parentNode

    if (answer) {
        todoToDelete.remove()
    }
}

function changeTheme() {
    
}

// EVENTOS

document.querySelector("#newTodoBtn").addEventListener("click", () => {
    const todo = document.querySelector("#newTodo")
    addNewTodo(todo.value)
    todo.value = null
})

document.addEventListener("click", (e) => {
    const iconClicked = e.target

    if (iconClicked.id === "doneIcon") {
        checkTodo(iconClicked)
    }

    if (iconClicked.id === "deleteIcon") {
        deleteTodo(iconClicked)
    }
})

document.querySelector("#themeBtn").addEventListener("click", (e) => { 
    const currentTheme = e.target.value
    console.log(currentTheme)

    if (currentTheme === "dark") {
        // função para alterar tema
    }

})

