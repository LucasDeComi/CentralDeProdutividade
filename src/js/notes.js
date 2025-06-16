let noteQuantity = 0;
let currentNote;
function deleteNote(button) { //Apagar nota
    const editButton = button.parentElement.querySelector(".editButton");
    const noteText = button.closest("section").querySelector("textarea");
    let confirmMessage = [];
    switch (lang) {
        case "en":
            confirmMessage.push("Are you sure you want to remove this note?");
            confirmMessage.push("Do you want to cancel your edit?");
            break;
        case "pt":
            confirmMessage.push("Tem certeza que deseja remover essa nota?");
            confirmMessage.push("Deseja cancelar a sua edição?");
            break;
    }
    if(button.querySelector("img").src.includes("delete.png")) {
        if(confirm(confirmMessage[0])) {
            button.closest("section").remove();
            noteQuantity--;
        }
        if(noteQuantity == 0) {
            document.getElementById("noteTool").querySelector(".noElements").style.display = "block";
        }
    }
    else {
        if(noteText.value != currentNote) {
            if(confirm(confirmMessage[1])) {
            cancelEdition()
            return;
            }
        }
        cancelEdition()
    }
    function cancelEdition() {
        button.querySelector("img").src = "./src/assets/delete.png";
        editButton.querySelector("img").src = "./src/assets/edit.png";
        noteText.value = currentNote;
        noteText.readOnly = true;
    }
}
function editNote(button) {
    const deleteButton = button.parentElement.querySelector(".deleteButton");
    const noteText = button.closest("section").querySelector("textarea");
    if(button.querySelector("img").src.includes("edit.png")) {
        currentNote = noteText.value;
        button.querySelector("img").src = "./src/assets/confirm.png";
        deleteButton.querySelector("img").src = "./src/assets/cancelar.png";
        noteText.readOnly = false;
    }
    else {
        let confirmMessage = [];
        switch (lang) {
            case "en":
                confirmMessage.push("You must change something to confirm your edit");
                confirmMessage.push("Do you want to save your changes?")
                break;
            case "pt":
                confirmMessage.push("Você deve fazer alguma alteração para confirmar a sua edição");
                confirmMessage.push("Deseja salvar suas alterações?");
                break;
        }
        if(currentNote == noteText.value) {
            alert(confirmMessage[0]);
            return;
        }
        if(confirm(confirmMessage[1])) {
            button.querySelector("img").src = "./src/assets/edit.png";
            deleteButton.querySelector("img").src = "./src/assets/delete.png";
            noteText.readOnly = true;
        }
    }
}
//CRIAR NOVA NOTA
function openNewNote() { //Abrir parte de nova nota
    document.getElementById("noteTool").style.display = "none";
    document.getElementById("newNote").style.display = "block";
}
function cancelNote() { //Cancelar nova nota
    document.getElementById("newNoteText").value = "";
    document.getElementById("noteTool").style.display = "block";
    document.getElementById("newNote").style.display = "none";
}
function addNewNote() { //Adicionar nova nota
    const newNote = document.createElement("section");
    const obs = document.getElementById("newNoteText");
    let alertMessage;
    switch (lang) {
        case "en":
            alertMessage = "You must write something in the note";
            break;
        case "pt":
            alertMessage = "Você deve escrever algo na nota";
            break;
    }
    if(obs.value == "") {
        alert(alertMessage);
        return;
    }
    noteQuantity++;
    newNote.className = "notes";
    newNote.innerHTML = `<textarea class="noteText" readonly></textarea>
                            <div>
                                <button class="deleteButton" onclick="deleteNote(this)"><img class="deleteImg" src="./src/assets/delete.png"></button>
                                <button class="editButton" onclick="editNote(this)"><img class="editImg" src="./src/assets/edit.png"></button>
                            </div>`;
    document.getElementById("notes").appendChild(newNote);
    document.getElementById("noteTool").querySelector(".noElements").style.display = "none";
    newNote.querySelector("textarea").value = obs.value;
    obs.value = "";
    document.getElementById("newNote").style.display = "none";
    document.getElementById("noteTool").style.display = "block";
}