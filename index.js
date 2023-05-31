/*
    LEMBRAR DE FAZER:
        - Faveicon (html)
        - Alterar barra do navegador
        - Alerta perguntando se tem certeza que quer deletar
        - Check para alternar entre feito e não feito

*/



let list = document.querySelector("#todoList")

function addNewTodo(newTodo) {
    const newTodoArea = document.createElement("div")
    list.appendChild(newTodoArea)
    newTodoArea.innerText = newTodo
    newTodoArea.classList.add("todoArea")
    // console.log(newTodoArea) // teste

    const checkBtn = document.createElement("")
    const deleteBtn = document.createElement("")
}

document.querySelector("#newTodoBtn").addEventListener("click", function () {
    const newTodo = document.querySelector("#newTodo")
    // console.log(newTodo.value)  // teste
    addNewTodo(newTodo.value)
    newTodo.value = ""
})