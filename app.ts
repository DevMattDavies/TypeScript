function add(
  num1: number,
  num2: number,
  showResult: boolean,
  showPhrase: string
) {
  if (showResult) {
    console.log(`${showPhrase} ${num1 + num2}`);
  } else {
    return num1 + num2;
  }
}

const n1 = 55;
const n2 = 5;
const printResult = true;
const phrase = "Result is:";

add(n1, n2, printResult, phrase);
