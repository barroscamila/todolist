/* LEMBRAR DE FAZER:
    - Faveicon (html)
    - Alterar barra do navegador
    - Alerta perguntando se tem certeza que quer deletar
    - Check para alternar entre feito e não feito
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
    if (answer) {
        icon.id = "doneIconDeleted"

    }
}

function deleteTodo() {
    const answer = confirm("Tem certeza que deseja deletar este item da lista?")
    if (answer) {
        // console.log("clicou em deletar!")
    }
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
        deleteTodo()
    }
})

