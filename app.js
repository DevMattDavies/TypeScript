function add(num1, num2, showResult, showPhrase) {
    if (showResult) {
        console.log("".concat(showPhrase, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 55;
var n2 = 5;
var printResult = true;
var phrase = "Result is:";
add(n1, n2, printResult, phrase);
