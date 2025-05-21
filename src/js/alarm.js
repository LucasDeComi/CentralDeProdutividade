let alarmQuantity = 0;
let alarmList = [];
let alarmTimeList = [];
let alarmDateList = [];
function deleteAlarm(button) { //Deletar Alarme
    const findAlarm = button.closest("section").id.split("alarm")[1];
    if(confirm("Tem certeza que deseja remover esse alarme?")) {
        button.closest("section").remove();
        alarmList.splice(findAlarm - 1, 1);
        alarmTimeList.splice(findAlarm - 1, 1);
        alarmDateList.splice(findAlarm - 1, 1);
        alarmQuantity--;
    }
    if(alarmQuantity == 0) {
        document.getElementById("noAlarms").style.display = "block";
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
    const alarmTime = document.getElementById("setTime");
    const alarmDate = document.getElementById("setDate");
    const alarmObs = document.getElementById("setObs");
    const newAlarm = document.createElement("section");
    if(alarmTime.value == "" || alarmDate.value == "") {
        alert("Os campos de data e horário devem ser preenchidos!");
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
    document.getElementById("noAlarms").style.display = "none";
    document.getElementById("newAlarm").style.display = "none";
    document.getElementById("alarmTool").style.display = "block";
    document.getElementById("setTime").value = "";
    document.getElementById("setDate").value = "";
    document.getElementById("setObs").value = "";
}
function cancelAlarm() {
    document.getElementById("setTime").value = "";
    document.getElementById("setDate").value = "";
    document.getElementById("setObs").value = "";
    document.getElementById("newAlarm").style.display = "none";
    document.getElementById("alarmTool").style.display = "block";
}