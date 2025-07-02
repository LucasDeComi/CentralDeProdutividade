//PARTE DE DIGITAÇÃO DO TIMER
let digits = "";
let initialTime;
let timerInterval;
let timerHour, timerMin, timerSec;
let cronInterval;
let cronMin, cronSec, cronMilSec;
const clock = document.getElementById("timerClock");
const alarm = new Audio("./src/assets/alarm.mp3");
document.addEventListener("keydown", function(e) {
    if(window.getComputedStyle(document.getElementById('timer')).display === "block" && window.getComputedStyle(document.getElementById("timerTool")).display === "block") {
        if(document.getElementById("timerClock").matches(":focus") || timerInterval) {return;}
        if(Number(e.key) >= 0 && Number(e.key) <= 9 && digits.length < 6 && e.key != " ") {
            digits += e.key;
            digitTimer();
        }
        if(e.key === "Backspace") {
            event.preventDefault();
            digits = digits.slice(0, -1);
            digitTimer();
        }
    }
    if(e.key == " " || e.key == "Enter") {
        if(window.getComputedStyle(document.getElementById("timerTool")).display === "block" && digits != "") {
            if(timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            else {
                startTimer()
            }
        }
        if(window.getComputedStyle(document.getElementById("cronTool")).display === "block") {
            if(cronInterval) {
                clearInterval(cronInterval);
                cronInterval = null;
            }
            else {
                startCron();
            }
        }
    }
});
document.getElementById("timerClock").addEventListener("beforeinput", function() {
    if(timerInterval) {event.preventDefault(); return;}
    clock.value = "";
    if(event.inputType === "deleteContentBackward") {
        digits = digits.slice(0, -1);
        digitTimer();
        event.preventDefault();
    }
});
document.getElementById("timerClock").addEventListener("input", function() {
    if(parseInt(clock.value) == Number(clock.value)) {
        if(digits.length < 6) {
            digits += clock.value;
        }
        digitTimer();
    }
    else {
        digitTimer();
    }
});
function digitTimer() {
    let display = digits.padStart(6, "0");
    let hour = display.slice(0, 2);
    let min = display.slice(2, 4);
    let sec = display.slice(4, 6);
    clock.value = `${hour}:${min}:${sec}`;
}

//FUNCIONALIDADES DO TIMER
function startTimer() {
    if(timerInterval) {clearInterval(timerInterval);}
    const time = document.getElementById("timerClock").value;
    timerHour = time.split(":")[0];
    timerMin = time.split(":")[1];
    timerSec = time.split(":")[2];
    if(timerSec == 0 && timerMin == 0 && timerHour == 0) {
        switch(lang) {
            case "en":
                alert("Timer needs a set time");
                break;
            case "pt":
                alert("O timer precisa de um tempo definido");
                break;
        }
        return;
    }
    timerInterval = setInterval(timerPlay, 1000);
}
function timerPlay() { //Rodar o Timer
    if(timerSec == 0) {
        if(timerMin == 0) {
            if(timerHour == 0) {
                alarm.play();
                setTimeout(() => {
                    switch(lang) {
                        case "en":
                            alert("The time's over");
                        case "pt":
                            alert("O tempo acabou!");
                    }
                }, 300);
                timerInterval = clearInterval(timerInterval);
                digits = "";
                return;
            }
            else {
                timerHour--;
                timerMin = 59;
                timerSec = 59;
            }
        }
        else {
            timerMin--;
            timerSec = 59;
        }
    }
    else {
        timerSec--;
    }
    document.getElementById("timerClock").value = `${String(timerHour).padStart(2, "0")}:${String(timerMin).padStart(2, "0")}:${String(timerSec).padStart(2, "0")}`;
}
function resetTimer() {
    digits = "";
    timerInterval = clearInterval(timerInterval);
    clock.value = "00:00:00";
}

//FUNCIONALIDADES DO CRONÔMETRO
function startCron() {
    if(cronInterval) {clearInterval(cronInterval);}
    const time = document.getElementById("cronClock").value;
    cronMin = time.split(":")[0];
    cronSec = time.split(":")[1];
    cronMilSec = time.split(":")[2];
    cronInterval = setInterval(cronPlay, 10);
}
function cronPlay() { //Rodar o Cronômetro
    if(cronMilSec == 99) {
        cronMilSec = 0;
        if(cronSec == 59) {
            cronSec = 0;
            cronMin++;
        }
        else {
            cronSec++;
        }
    }
    else {
        cronMilSec++;
    }
    document.getElementById("cronClock").value = `${String(cronMin).padStart(2, "0")}:${String(cronSec).padStart(2, "0")}:${String(cronMilSec).padStart(2, "0")}`;
}
function resetCron() {
    document.getElementById("cronClock").value = "00:00:00";
    clearInterval(cronInterval);
}