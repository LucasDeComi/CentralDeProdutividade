let taskQuantity = 0;
function taskCheck(button) { //Dar 'check' na tarefa
    const img = button.querySelector("img");
    if(window.getComputedStyle(img).display == "none") {
        button.querySelector("img").style.display = "block";
        button.closest("div").querySelector("p").style.textDecoration = "line-through";
    }
    else {
        button.querySelector("img").style.display = "none";
        button.closest("div").querySelector("p").style.textDecoration = "none";
    }
}
function deleteTask(button) { //Excluir Tarefas
    if(confirm("Tem certeza que deseja excluir essa tarefa?")) {
        button.closest("section").remove();
        taskQuantity--;
    }
    if(taskQuantity == 0) {
        document.getElementById("taskTool").querySelector(".noElements").style.display = "block";
    }
}
//PARTE DE CRIAR NOVAS TAREFAS
document.getElementById("newTaskInput").addEventListener("input", function(e) { //Controle da quantidade de dígitos no input de nova tarefa
    const newTaskInput = e.target;
    if(newTaskInput.value.length > 30) {
        document.getElementById("newTaskInput").value = newTaskInput.value.slice(0, 30);
    }
    document.getElementById("newTaskLength").innerText = `(${newTaskInput.value.length}/30)`;
});
function addNewTask() { //Criar nova tarefa
    const obs = document.getElementById("newTaskInput").value;
    const newTask = document.createElement("section");
    if(obs == "") {
        alert("A nova tarefa deve ser preenchida com uma observação");
        return;
    }
    taskQuantity++;
    newTask.className = "tasks";
    newTask.innerHTML = `<div>
                            <button class="taskCheck" onclick="taskCheck(this)"><img class="taskCheckImg" src="./src/assets/check.png"></button>
                            <p class="taskObs"></p>
                        </div>
                        <button class="deleteButton" onclick="deleteTask(this)"><img class="deleteImg" src="./src/assets/delete.png"></button>`;
    document.getElementById("tasks").appendChild(newTask);
    document.getElementById("taskTool").querySelector(".noElements").style.display = "none";
    newTask.querySelector(".taskObs").innerText = obs;
    document.getElementById("newTaskInput").value = "";
    document.getElementById("newTaskLength").innerText = "(0/30)";
}