const tablet = window.matchMedia("(max-width: 900px)");
const mobile = window.matchMedia("(max-width: 650px)");
window.addEventListener("load", function() {
    const check = setInterval(function() {
        let alarms = document.getElementsByClassName("alarms");
        let tasks = document.getElementsByClassName("tasks");
        for(let i = 0; i < alarms.length; i++) {
            const currentAlarm = alarms[i].querySelector(".alarmNote");
            if(currentAlarm.innerText.length > 20) {
                if(tablet.matches) {
                    currentAlarm.style.fontSize = "19px";
                }
                else {
                    currentAlarm.style.fontSize = "25px";
                }
            }
            if(currentAlarm.innerText.length > 15) {
                if(mobile.matches) {
                    currentAlarm.style.fontSize = "15px";
                    if(currentAlarm.innerText.split(" ").length == 1) {
                        currentAlarm.innerText = `${currentAlarm.innerText.slice(0, 15)} ${currentAlarm.innerText.slice(15)}`;
                    }
                }
            }
        }
        for(let i = 0; i < tasks.length; i++) {
            const currentTask = tasks[i].querySelector(".taskObs");
            if(currentTask.innerText.length > 20) {
                if(tablet.matches) {
                    currentTask.style.fontSize = "19px";
                }
                else {
                    currentTask.style.fontSize = "25px";
                }
            }
            if(currentTask.innerText.length > 15) {
                if(mobile.matches) {
                    currentTask.style.fontSize = "15px";
                    if(currentTask.innerText.split(" ").length == 1) {
                        currentTask.innerText = `${currentTask.innerText.slice(0, 15)} ${currentTask.innerText.slice(15)}`;
                    }
                }
            }
        }
    }, 500);
})