function digit(key) {
    let number = document.getElementById("currentOperation").innerText;
    if((number.includes(",") || number.includes(".")) && (key == "," || key == ".")) {
        return;
    }
    if(key == "Backspace") {
        if(number == "0") {
            return;
        }
        document.getElementById("currentOperation").innerText = number.slice(0, number.length - 1);
        if(document.getElementById("currentOperation").innerText == "") {
            document.getElementById("currentOperation").innerText = "0";
        }
        return;
    }
    if(number == "0") {
        document.getElementById("currentOperation").innerText = "";
    }
    if(number.length > 20) {
        return;
    }
    document.getElementById("currentOperation").innerText += key;
}
window.addEventListener("keydown", function(e) {
    if(document.getElementById("calculatorTool").style.display == "block") {
        if(parseInt(e.key) == Number(e.key) || e.key == "," || e.key == "." || e.key == "Backspace") {
            digit(e.key);
        }
    }
});