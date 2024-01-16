function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var text_query = document.getElementById("result").value;
    var calculated_answer = eval(text_query);
    document.getElementById("result").value = calculated_answer;
}