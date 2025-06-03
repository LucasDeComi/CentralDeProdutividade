let memory = 0;
let operation = [];
let visorText = "";
function digit(key) { // Programação do Teclado e Digitação
    let number = document.getElementById("currentOperation").innerText;
    if((number.includes(",") || number.includes(".")) && (key == "," || key == ".")) {
        return;
    }
    if(key == "Backspace") {
        if(number == "0") {
            return;
        }
        visorText = number.slice(0, number.length - 1);
        if(visorText == "") {
            visorText = "0";
        }
        document.getElementById("currentOperation").innerText = visorText;
        return
    }
    if(number == "0") {
        visorText = "";
    }
    if(number == "0" && (key == "," || key == ".")) {
        visorText = `0${key}`;
    }
    if(number.length > 20) {
        return;
    }
    visorText += key
    document.getElementById("currentOperation").innerText = visorText;
}
function operate(key) { // Realizar Operações
    let number = visorText;
    let virgula = false;
    if(number.includes(",")) {
        virgula = true;
        number = number.toString().replace(",", ".");
    }
    if(number == "") {number = 0;}
    number = parseFloat(number);
    switch(key) {
        case "+/-":
            number = number * -1;
            if(virgula) {
                number = number.toString().replace(".", ",");
            }
            document.getElementById("currentOperation").innerText = number;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            switch(operation[operation.length - 1]) {
                case "+":
                case "-":
                case "*":
                case "/":
                    if(visorText == "") {
                        operation.pop();
                        operation.push(key);
                        document.getElementById("wholeOperation").innerText = operation.join(" ");
                    }
                    else {
                        operation.push(number);
                        console.log(operation);
                        operation = operation.join(" ");
                        operation = eval(operation) + ` ${key}`;
                        document.getElementById("wholeOperation").innerText = operation;
                        operation = operation.split(" ");
                        visorText = "";
                        break;
                    }
            }
            if(operation == "") {
                operation.push(number, key);
                document.getElementById("wholeOperation").innerText = `${number} ${key}`;
                visorText = "";
            }
            break;
    }
}
// Funcionalidades Especiais
function clearAll() { // Limpar Toda a Conta
    document.getElementById("currentOperation").innerText = "0";
    document.getElementById("wholeOperation").innerText = "";
    visorText = "";
    operation = [];
}
function clearVisor() { // Limpar Apenas Texto no Visor
    document.getElementById("currentOperation").innerText = "0";
    visorText = "";
}
function useMemory(action) { // Funções da Memória
    let number = document.getElementById("currentOperation").innerText;
    if(number.includes(",")) {
        number = number.toString().replace(",", ".");
    }
    number = parseFloat(number);
    switch(action) {
        case "M": //
            alert(`O valor ${memory} está armazenado em sua memória`);
            break;
        case "MR":
            document.getElementById("currentOperation").innerText = memory;
            visorText = memory;
            break;
        case "M+":
            memory += number;
            break;
        case "M-":
            memory -= number;
            break;
        case "MS":
            memory = number;
            break;
    }
}
window.addEventListener("keydown", function(e) { // Ativar Funções pelas Teclas do Teclado
    if(document.getElementById("calculatorTool").style.display == "block") {
        if(parseInt(e.key) == Number(e.key) || e.key == "," || e.key == "." || e.key == "Backspace") {
            digit(e.key);
        }
        switch(e.key) {
            case "+":
                operate("+")
                break;
            case "-":
                operate("-")
                break;
            case "*":
                operate("*")
                break;
            case "/":
                operate("/")
                break;
        }
    }
});