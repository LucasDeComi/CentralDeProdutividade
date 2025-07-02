let selectedTool;
let timerSelTool = "timer";
function openTool(button) { //ABRIR FERRAMENTAS
    let tools = document.getElementsByClassName('tools');
    let toolsButton = document.getElementsByClassName('toolsButton');
    let borderWeight;
    for(i = 0; i < tools.length; i++) {
        tools[i].style.display = 'none';
    }
    for(i = 0; i < toolsButton.length; i++) {
        toolsButton[i].style.border = '0';
        toolsButton[i].style.borderColor = 'transparent';
        toolsButton[i].style.backgroundColor = 'transparent';
        toolsButton[i].classList.remove("active");
        switch(screenMode) {
            case "light":
                toolsButton[i].style.color = '#1a1a1a';
                toolsButton[i].querySelector('.toolsButtonImg').src = `./src/assets/${(toolsButton[i].id).split('Button')[0]}.png`;
                break;
            case "dark":
                toolsButton[i].style.color = '#eee';
                toolsButton[i].querySelector('.toolsButtonImg').src = `./src/assets/${(toolsButton[i].id).split('Button')[0]}Dark.png`;
        }
    }
    button.style.color = '#144ef3';
    button.classList.add("active");
    button.querySelector('.toolsButtonImg').src = `./src/assets/${(button.id).split('Button')[0]}Sel.png`;
    if(window.innerWidth <= 900) {
        borderWeight = '3';
    }
    else {
        borderWeight = '4';
    }
    button.style.borderBottom = `${borderWeight}px solid #144ef3`;
    document.getElementById(`${selectedTool}Tool`).style.display = 'block';
    if(selectedTool == 'timer') {
        document.getElementById(selectedTool).style.display = 'block';
        if(timerSelTool == "timer") {
            document.getElementById("timerTool").style.display = 'block';
            document.getElementById("cronTool").style.display = 'none';
        }
        if(timerSelTool == "cron") {
            document.getElementById("cronTool").style.display = 'block';
            document.getElementById("timerTool").style.display = 'none';
        }
    }
}
function openCron() { //Alternar de Timer para Cronômetro
    document.getElementById('timerTitle').style.display = 'none';
    document.getElementById('cronometerTitle').style.display = 'flex';
    document.getElementById('timerTool').style.display = 'none';
    document.getElementById('cronTool').style.display = 'block';
    timerSelTool = "cron";
}
function openTimer() { //Alternar de Cronômetro para Timer
    document.getElementById('timerTitle').style.display = 'flex';
    document.getElementById('cronometerTitle').style.display = 'none';
    document.getElementById('cronTool').style.display = 'none';
    document.getElementById('timerTool').style.display = 'block';
    timerSelTool = "timer";
}