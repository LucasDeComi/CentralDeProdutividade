const settings = document.getElementById("settingsTool");
const selLangDiv = settings.querySelector("div");
var lang = "pt";
var screenMode = "light";
function openSelLang() { // Abrir divisória de selecionar idiomas
    if(selLangDiv.style.display == "block") {
        selLangDiv.style.display = "none";
    }
    else {
        selLangDiv.style.display = "block";
    }
}
function selLang(langSelected) { // Mudar o Idioma
    selLangDiv.style.display = "none";
    switch(langSelected) {
        case "en":
            lang = "en";
            document.getElementById("selLanguage").innerHTML = "Language: <span>English</span><img class='langImg' src='./src/assets/eua.png'>";
            document.querySelector("h1").querySelector("span").innerText = "Productivity Central";
            document.querySelector("header").querySelector("p").innerText = "Organize your day with our tools!";
            document.getElementById("alarmButton").querySelector("span").innerText = "Alarm";
            document.getElementById("tasksButton").querySelector("span").innerText = "Tasks";
            document.getElementById("notesButton").querySelector("span").innerText = "Notes";
            document.getElementById("calculatorButton").querySelector("span").innerText = "Calculator";
            document.getElementById("settingsButton").querySelector("span").innerText = "Settings";
            document.getElementById("cronometerTitle").querySelector("span").innerText = "Cronometer";
            document.getElementById("timerPlay").querySelector("span").innerText = "Play";
            document.getElementById("timerPause").querySelector("span").innerText = "Pause";
            document.getElementById("timerReset").querySelector("span").innerText = "Reset";
            document.getElementById("mudarCron").querySelector("span").innerText = "Cronometer";
            document.getElementById("cronPlay").querySelector("span").innerText = "Play";
            document.getElementById("cronPause").querySelector("span").innerText = "Pause";
            document.getElementById("cronReset").querySelector("span").innerText = "Reset";
            document.getElementById("alarmTool").querySelector("h2").querySelector("span").innerText = "Alarm";
            document.getElementById("alarmTool").querySelector(".noElements").innerText = "You don't have any alarm yet";
            document.getElementById("addAlarm").querySelector("span").innerText = "Add Alarm";
            document.getElementById("newAlarm").querySelector("h2").innerText = "New Alarm";
            document.getElementById("timeAndDate").querySelectorAll("p")[0].innerText = "Time";
            document.getElementById("timeAndDate").querySelectorAll("p")[1].innerText = "Date";
            document.getElementById("obsP").innerText = "Message";
            document.getElementById("addNewAlarm").querySelector("span").innerText = "Save Alarm";
            document.getElementById("cancelAlarm").querySelector("span").innerText = "Cancel";
            document.getElementById("taskTool").querySelector("h2").querySelector("span").innerText = "Tasks";
            document.getElementById("taskTool").querySelector(".noElements").innerText = "You don't have any task yet";
            document.getElementById("newTask").querySelector("p").innerText = "New Task:";
            document.getElementById("noteTool").querySelector("h2").querySelector("span").innerText = "Notes";
            document.getElementById("noteTool").querySelector(".noElements").innerText = "You don't have any note yet";
            document.getElementById("addNote").querySelector("span").innerText = "Add Note";
            document.getElementById("newNote").querySelector("h2").innerText = "New Note";
            document.getElementById("newNoteText").placeholder = "Enter your note:";
            document.getElementById("addNewNote").querySelector("span").innerText = "Save Note";
            document.getElementById("cancelNote").querySelector("span").innerText = "Cancel";
            document.getElementById("settingsTool").querySelector("h2").querySelector("span").innerText = "Settings";
            if(screenMode == "light") {
                document.getElementById("screenModeText").innerText = "Light Mode";
            }
            else {
                document.getElementById("screenModeText").innerText = "Dark Mode";
            }
            break;
        case "pt":
            document.getElementById("selLanguage").innerHTML = "Idioma: <span>Português</span><img class='langImg' src='./src/assets/brazil.png'>";
            document.querySelector("h1").querySelector("span").innerText = "Central de Produtividade";
            document.querySelector("header").querySelector("p").innerText = "Organize seu dia com nossas ferramentas!";
            document.getElementById("alarmButton").querySelector("span").innerText = "Alarme";
            document.getElementById("tasksButton").querySelector("span").innerText = "Tarefas";
            document.getElementById("notesButton").querySelector("span").innerText = "Notas";
            document.getElementById("calculatorButton").querySelector("span").innerText = "Calculadora";
            document.getElementById("settingsButton").querySelector("span").innerText = "Configurações";
            document.getElementById("cronometerTitle").querySelector("span").innerText = "Cronômetro";
            document.getElementById("timerPlay").querySelector("span").innerText = "Iniciar";
            document.getElementById("timerPause").querySelector("span").innerText = "Pausar";
            document.getElementById("timerReset").querySelector("span").innerText = "Reiniciar";
            document.getElementById("mudarCron").querySelector("span").innerText = "Cronômetro";
            document.getElementById("cronPlay").querySelector("span").innerText = "Iniciar";
            document.getElementById("cronPause").querySelector("span").innerText = "Pausar";
            document.getElementById("cronReset").querySelector("span").innerText = "Reiniciar";
            document.getElementById("alarmTool").querySelector("h2").querySelector("span").innerText = "Alarme";
            document.getElementById("alarmTool").querySelector(".noElements").innerText = "Você ainda não tem nenhum alarme";
            document.getElementById("addAlarm").querySelector("span").innerText = "Adicionar Alarme";
            document.getElementById("newAlarm").querySelector("h2").innerText = "Novo Alarme";
            document.getElementById("timeAndDate").querySelectorAll("p")[0].innerText = "Horário";
            document.getElementById("timeAndDate").querySelectorAll("p")[1].innerText = "Data";
            document.getElementById("obsP").innerText = "Recado";
            document.getElementById("addNewAlarm").querySelector("span").innerText = "Salvar Alarme";
            document.getElementById("cancelAlarm").querySelector("span").innerText = "Cancelar";
            document.getElementById("taskTool").querySelector("h2").querySelector("span").innerText = "Tarefas";
            document.getElementById("taskTool").querySelector(".noElements").innerText = "Você ainda não tem nenhuma tarefa";
            document.getElementById("newTask").querySelector("p").innerText = "Nova Tarefa:";
            document.getElementById("noteTool").querySelector("h2").querySelector("span").innerText = "Notas";
            document.getElementById("noteTool").querySelector(".noElements").innerText = "Você ainda não tem nenhuma nota";
            document.getElementById("addNote").querySelector("span").innerText = "Adicionar Nota";
            document.getElementById("newNote").querySelector("h2").innerText = "Nova Nota";
            document.getElementById("newNoteText").placeholder = "Digite a sua nota:";
            document.getElementById("addNewNote").querySelector("span").innerText = "Salvar Nota";
            document.getElementById("cancelNote").querySelector("span").innerText = "Cancelar";
            document.getElementById("settingsTool").querySelector("h2").querySelector("span").innerText = "Configurações";
            if(screenMode == "light") {
                document.getElementById("screenModeText").innerText = "Modo Claro";
            }
            else {
                document.getElementById("screenModeText").innerText = "Modo Escuro";
            }
            lang = "pt";
            break;
    }
}
function changeScreenMode() {
    const alarms = document.querySelectorAll(".alarms");
    const tasks = document.querySelectorAll(".tasks");
    const notes = document.querySelectorAll(".notes");
    const timerButton = document.querySelectorAll(".timerButton");
    const toolElements = document.querySelectorAll(".toolElements");
    const toolContainers = document.querySelectorAll(".toolContainers");
    const activeButton = document.querySelector(".toolsButton.active");
    const addCancelButton = document.querySelectorAll(".addCancelButton");
    const addButton = document.querySelectorAll(".addButton");
    const cancelButton = document.querySelectorAll(".cancelButton");
    const saveButton = document.querySelectorAll(".saveButton");
    const deleteImg = document.querySelectorAll(".deleteImg");
    const editImg = document.querySelectorAll(".editImg");
    alarms.forEach((alarm) => {
        alarm.classList.toggle("dark");
    });
    tasks.forEach((task) => {
        task.classList.toggle("dark");
    });
    notes.forEach((note) => {
        note.classList.toggle("dark");
    });
    switch(screenMode) {
        case "light":
            screenMode = "dark";
            document.getElementById("screenMode").querySelector("img").src = "./src/assets/darkMode.png";
            switch(lang) {
                case "en":
                    document.getElementById("screenModeText").innerText = "Dark Mode";
                case "pt":
                    document.getElementById("screenModeText").innerText = "Modo Escuro";
            }
            document.body.style.backgroundColor = "#222";
            document.querySelector("nav").style.backgroundColor = "#1a1a1a";
            document.querySelectorAll(".tools").forEach((tool) => {
                tool.style.backgroundColor = "#1a1a1a";
            });
            document.querySelectorAll(".toolsButton").forEach((btn) => {
                btn.style.color = "#eee";
                btn.querySelector("img").src = `./src/assets/${(btn.id).split('Button')[0]}Dark.png`;
            });
            document.querySelectorAll(".toolsSection").forEach((section) => {
                section.style.backgroundColor = "#222";
                section.style.color = "#eee";
            });
            openTool(activeButton);
            timerButton.forEach((btn) => {
                btn.style.color = "#eee";
            });
            for(let i = 0; i < 8; i++) {
                switch(i % 4) {
                    case 0:
                        timerButton[i].querySelector("img").src = "./src/assets/playDark.png";
                        break;
                    case 1:
                        timerButton[i].querySelector("img").src = "./src/assets/pauseDark.png";
                        break;
                    case 2:
                        timerButton[i].querySelector("img").src = "./src/assets/replayDark.png";
                        break;
                    case 3:
                        timerButton[i].querySelector("img").src = "./src/assets/timerDark.png";
                        break;
                }
            }
            toolElements.forEach((e) => {
                e.style.backgroundColor = "#222";
                e.style.color = "#eee";
            });
            document.getElementById("newTaskInput").style.borderBottom = "1px solid #eee";
            document.getElementById("newTask").style.color = "#eee";
            toolContainers.forEach((container) => {
                container.style.borderBottom = "2px solid #eee";
            });
            deleteImg.forEach((img) => {
                img.src = "./src/assets/deleteDark.png";
            });
            editImg.forEach((img) => {
                img.src = "./src/assets/editDark.png";
            });
            addCancelButton.forEach((btn) => {
                btn.style.color = "#eee";
            });
            addButton.forEach((btn) => {
                btn.querySelector("img").src = "./src/assets/addDark.png";
            });
            cancelButton.forEach((btn) => {
                btn.querySelector("img").src = "./src/assets/cancelDark.png";
            });
            saveButton.forEach((btn) => {
                btn.querySelector("img").src = "./src/assets/saveDark.png";
            });
            document.getElementById("confirmNewAlarm").style.borderTop = "2px solid #eee";
            document.querySelectorAll("input").forEach((input) => {
                input.style.color = "#eee";
            });
            document.getElementById("setObs").style.borderBottom = "1px solid #eee";
            break;
        case "dark":
            screenMode = "light";
            document.getElementById("screenMode").querySelector("img").src = "./src/assets/lightMode.png";
            switch(lang) {
                case "en":
                    document.getElementById("screenModeText").innerText = "Light Mode";
                case "pt":
                    document.getElementById("screenModeText").innerText = "Modo Claro";
            }
            document.body.style.backgroundColor = "#eee";
            document.querySelector("nav").style.backgroundColor = "#fff";
            document.querySelectorAll(".tools").forEach(function(tool) {
                tool.style.backgroundColor = "#fff";
            });
            document.querySelectorAll(".toolsButton").forEach((btn) => {
                btn.style.color = "#1a1a1a";
                btn.querySelector("img").src = `./src/assets/${(btn.id).split('Button')[0]}.png`;
            });
            openTool(activeButton);
            document.querySelectorAll(".toolsSection").forEach((section) => {
                section.style.backgroundColor = "#eee";
                section.style.color = "#1a1a1a";
            });
            timerButton.forEach((btn) => {
                btn.style.color = "#1a1a1a";
            });
            for(let i = 0; i < 8; i++) {
                switch(i % 4) {
                    case 0:
                        timerButton[i].querySelector("img").src = "./src/assets/play.png";
                        break;
                    case 1:
                        timerButton[i].querySelector("img").src = "./src/assets/pause.png";
                        break;
                    case 2:
                        timerButton[i].querySelector("img").src = "./src/assets/replay.png";
                        break;
                    case 3:
                        timerButton[i].querySelector("img").src = "./src/assets/timer.png";
                        break;
                }
            }
            toolElements.forEach((e) => {
                e.style.backgroundColor = "#eee";
                e.style.color = "#1a1a1a";
            });
            document.getElementById("newTaskInput").style.borderBottom = "1px solid #1a1a1a";
            document.getElementById("newTask").style.color = "#1a1a1a";
            toolContainers.forEach((container) => {
                container.style.borderBottom = "2px solid #1a1a1a";
            });
            deleteImg.forEach((img) => {
                img.src = "./src/assets/delete.png";
            });
            editImg.forEach((img) => {
                img.src = "./src/assets/edit.png";
            });
            addCancelButton.forEach((btn) => {
                btn.style.color = "#1a1a1a";
            });
            addButton.forEach((btn) => {
                btn.querySelector("img").src = "./src/assets/add.png";
            });
            cancelButton.forEach(btn => {
                btn.querySelector("img").src = "./src/assets/cancelar.png";
            });
            saveButton.forEach((btn) => {
                btn.querySelector("img").src = "./src/assets/save.png";
            });
            document.getElementById("confirmNewAlarm").style.borderTop = "2px solid #1a1a1a";
            document.querySelectorAll("input").forEach((input) => {
                input.style.color = "#1a1a1a";
            });
            document.getElementById("setObs").style.borderBottom = "1px solid #1a1a1a";
            break;
    }
}