let memory = 0;
let operation = [];
let visorText = "";
let specialOp = false;
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
        if(key == "," || key == ".") {
            visorText = "0";
        }
        else {
            visorText = key;
        }
    }
    if(number.length > 20) {
        return;
    }
    visorText += key
    document.getElementById("currentOperation").innerText = visorText;
}
function operate(key) { // Realizar Operações
    let number = document.getElementById("currentOperation").innerText;
    let virgula = false;
    const lastDigit = operation[operation.length - 1];
    if(number.includes(",")) {
        virgula = true;
        number = number.toString().replace(",", ".");
    }
    if(number == "") {number = 0;}
    number = parseFloat(number);
    switch(key) {
        case "+/-":
            if(visorText == "") {return;}
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
                case "=":
                    if(visorText == "") {
                        operation.pop();
                        operation.push(key);
                        document.getElementById("wholeOperation").innerText = operation.join(" ");
                    }
                    else {
                        operation.push(number);
                        operation = operation.join(" ");
                        operation = `${eval(operation)} ${key}`;
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
            if(operation == Number(operation)) {
                operation.push(key);
                document.getElementById("wholeOperation").innerText = operation.join(" ");
                visorText = "";
            }
            if(specialOp) {
                operation.push(key);
                document.getElementById("wholeOperation").innerText = operation.join(" ");
            }
            specialOp = false;
            break;
        case "%":
            let total, result;
            if(operation == "") {return;}
            for(i = 0; i < operation.length; i++) {
                if(operation[i] == Number(operation[i])) {
                    total = operation[i];
                }
            }
            result = (number / 100) * total;
            operation.push(result);
            operation = operation.join(" ");
            document.getElementById("wholeOperation").innerText = operation;
            document.getElementById("currentOperation").innerText = result;
            operation = eval(operation);
            operation = [operation];
            visorText = "";
            specialOp = true;
            break;
        case "x²":
            let square = number ** 2;
            if(operation == "" || (lastDigit != "+" && lastDigit != "-" && lastDigit != "*" && lastDigit != "/")) {
                console.log(operation);
                if(lastDigit != "+" && lastDigit != "-" && lastDigit != "*" && lastDigit != "/") {operation.pop()}
                document.getElementById("wholeOperation").innerText = `${operation.join(" ")} ${number}²`;
            }
            else {
                document.getElementById("wholeOperation").innerText = `${operation.join(" ")} ${number}²`;
            }
            document.getElementById("currentOperation").innerText = square;
            operation.push(square);
            visorText = "";
            specialOp = true;
            break;
        case "sqrt":
            let root = Math.sqrt(number);
            if(operation == "" || (lastDigit != "+" && lastDigit != "-" && lastDigit != "*" && lastDigit != "/")) {
                console.log(operation);
                if(lastDigit != "+" && lastDigit != "-" && lastDigit != "*" && lastDigit != "/") {operation.pop()}
                document.getElementById("wholeOperation").innerText = `${operation.join(" ")} √(${number})`;
            }
            else {
                document.getElementById("wholeOperation").innerText = `${operation.join(" ")} √(${number})`;
            }
            document.getElementById("currentOperation").innerText = root;
            operation.push(root);
            visorText = "";
            specialOp = true;
            break;
        case "=":
            let opResult;
            if(operation == Number(operation)) {operation = [];}
            if(visorText == number) {operation.push(number)}
            document.getElementById("wholeOperation").innerText = `${operation.join(" ")} =`;
            if(operation == "") {
                opResult = number;
                document.getElementById("wholeOperation").innerText = `${number} =`;
            }
            else {
                operation = eval(operation.join(" "));
                opResult = operation;
            }
            document.getElementById("currentOperation").innerText = opResult;
            operation = [];
            operation.push(opResult);
            visorText = "";
            console.log(operation);
            break;
    }
}
// FUNCIONALIDADES ESPECIAIS
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
            switch(lang) {
                case "en":
                    alert(`The value ${memory} is stored in your memory`)
                case "pt":
                    alert(`O valor ${memory} está armazenado em sua memória`);
                    break;
            }
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
                operate("+");
                break;
            case "-":
                operate("-");
                break;
            case "*":
                operate("*");
                break;
            case "/":
                operate("/");
                break;
            case "%":
                operate("%");
                break;
            case "Enter":
            case "=":
                event.preventDefault();
                operate("=");
                break;
        }
    }
});