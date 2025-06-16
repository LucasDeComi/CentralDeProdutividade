let alarmQuantity = 0;
let alarmList = [];
let alarmTimeList = [];
let alarmDateList = [];
const alarmSound = new Audio("./src/assets/alarm.mp3");
function deleteAlarm(button) { //Deletar Alarme
    const findAlarm = button.closest("section").id.split("alarm")[1];
    let confirmMessage;
    switch (lang) {
        case "en":
            confirmMessage = "Are you sure you want to remove this alarm?";
            break;
        case "pt":
            confirmMessage = "Tem certeza que deseja remover esse alarme?";
            break;
    }
    if(confirm(confirmMessage)) {
        button.closest("section").remove();
        alarmList.splice(findAlarm - 1, 1);
        alarmTimeList.splice(findAlarm - 1, 1);
        alarmDateList.splice(findAlarm - 1, 1);
        alarmQuantity--;
    }
    if(alarmQuantity == 0) {
        document.getElementById("alarmTool").querySelector(".noElements").style.display = "block";
        alarmList = [];
        alarmTimeList = [];
        alarmDateList = [];
    }
}
function openNewAlarm() { //Abrir Novo Alarme
    document.getElementById("newAlarm").style.display = "block";
    document.getElementById("alarmTool").style.display = "none";
}
document.getElementById("setObs").addEventListener("input", function(e) { //Quando algo for digitado no input, indicar a quantidade de caracteres.
    const newAlarmObs = e.target;
    if(newAlarmObs.value.length > 30) {
        document.getElementById("setObs").value = newAlarmObs.value.slice(0, 30);
    }
    document.getElementById("newAlarmLength").innerText = `(${newAlarmObs.value.length}/30)`;
});
function addNewAlarm() { //Adicionar Novo Alarme
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const alarmTime = document.getElementById("setTime");
    const alarmDate = document.getElementById("setDate");
    const alarmObs = document.getElementById("setObs");
    const newAlarm = document.createElement("section");
    if(alarmTime.value == "" || alarmDate.value == "") {
        switch (lang) {
            case "en":
                alert("Date and time fields must be filled in");
                break;
            case "pt":
                alert("Os campos de data e horário devem ser preenchidos!");
                break;
        }
        return;
    }
    if(alarmDate.value < currentDate || (alarmDate.value == currentDate && alarmTime.value < currentTime)) {
        switch (lang) {
            case "en":
                alert("Date and time of alarm can't be in past");
                break;
            case "pt":
                alert("A data e horário do alarme não podem estar no passado");
                break;
        }
        return;
    }
    alarmQuantity++;
    newAlarm.className = "alarms";
    newAlarm.id = `alarm${alarmQuantity}`;
    newAlarm.innerHTML = `<div class="alarmProp">
                            <article>
                                <p class="alarmTime"></p>
                                <p class="alarmDate"></p>
                            </article>
                            <p class="alarmNote"></p>
                        </div>
                        <button class="deleteButton" onclick="deleteAlarm(this)"><img class="deleteImg" src="./src/assets/delete.png"></button>`;
    document.getElementById("alarms").appendChild(newAlarm);
    alarmList.push(newAlarm.id.split("alarm")[1]);
    alarmTimeList.push(alarmTime.value);
    alarmDateList.push(alarmDate.value);
    newAlarm.querySelector(".alarmTime").innerText = alarmTime.value;
    newAlarm.querySelector(".alarmDate").innerText = (alarmDate.value.split("-")).join("/");
    newAlarm.querySelector(".alarmNote").innerText = alarmObs.value;
    document.getElementById("alarmTool").querySelector(".noElements").style.display = "none";
    document.getElementById("newAlarm").style.display = "none";
    document.getElementById("alarmTool").style.display = "block";
    document.getElementById("setTime").value = "";
    document.getElementById("setDate").value = "";
    document.getElementById("setObs").value = "";
    document.getElementById("newAlarmLength").innerText = "(0/30)";
}
function cancelAlarm() {
    document.getElementById("setTime").value = "";
    document.getElementById("setDate").value = "";
    document.getElementById("setObs").value = "";
    document.getElementById("newAlarm").style.display = "none";
    document.getElementById("alarmTool").style.display = "block";
}

//CONFIGURANDO O ALARME
window.addEventListener("load", function() {
    let alarmPlayed = false;
    let alarmLoad = setInterval(function alarmPlay() { //A cada um segundo, checar todos os alarmes e ver se é hora de tocar algum
        const now = new Date();
        const currentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
        const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        for(let i = 0; i < alarmList.length; i++) {
            const currentAlarm = document.getElementById(`alarm${alarmList[i]}`);
            const time = alarmTimeList[i];
            const date = alarmDateList[i];
            const obs = currentAlarm.querySelector(".alarmNote");
            if(currentTime == time && currentDate == date) {
                alarmPlayed = true;
                alarmSound.play();
                setTimeout(function() {
                    switch(lang) {
                        case "en":
                            alert(`${time}. Alarm playing! ${obs.innerText}`);
                        case "pt":
                            alert(`${time}. Alarme tocando! ${obs.innerText}`);
                            break;
                    }
                }, 300);
                alarmQuantity--;
                document.getElementById(`alarm${alarmList[i]}`).remove();
            }
        }
        if(alarmPlayed) {
            clearInterval(alarmLoad);
            setTimeout(function() {
                alarmPlayed = false;
                alarmLoad = setInterval(alarmPlay, 1000);
            }, 60000);
        }
    }, 1000);
});