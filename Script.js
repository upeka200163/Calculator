function display(value) {
    document.forms["forms"].screen.value += value;
}

function clearScreen() {
    document.forms["forms"].screen.value = "";
}

function calculate() {
    try {
        document.forms["forms"].screen.value = eval(document.forms["forms"].screen.value);
    } catch (e) {
        document.forms["forms"].screen.value = "Error";
    }
}