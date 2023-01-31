// Input the expression here.
let input = ['1 + 1'];


// (code waaoooow)
let addition;
let subtraction;
let multiplication;
let division;
input = input[0].split(' ');
input.forEach((element) => {
  if (
    element.includes('1') ||
    element.includes('2') ||
    element.includes('3') ||
    element.includes('4') ||
    element.includes('5') ||
    element.includes('6') ||
    element.includes('7') ||
    element.includes('8') ||
    element.includes('9') ||
    element.includes('0')
  ) {
    input[input.indexOf(element)] = Number(element);
  } else if (element === '+') {
    addition = true;
  } else if (element === '-') {
    subtraction = true;
  } else if (element === '*') {
    multiplication = true;
  } else if (element === '/') {
    division = true;
  }
});
console.log(input);

if (addition) {
  input.splice(input.indexOf('+'), 1);
  console.log(input[0] + input[1]);
}
if (subtraction) {
  input.splice(input.indexOf('-'), 1);
  console.log(input[0] - input[1]);
}
if (multiplication) {
  input.splice(input.indexOf('*'), 1);
  console.log(input[0] * input[1]);
}
if (division) {
  input.splice(input.indexOf('/'), 1);
  console.log(input[0] / input[1]);
}


// couldnt you just `console.log(1 + 1);`
// NO!!!!!!!!!!!
// I WILL NOT !!
// I WANT TO OVERTHINK THIS AS MUCH AS POSSIBLE
// :D !!!!!!!!!!!!!!!!!!!!!!!!!!!

// Other Notes:
// currently only functions with single-digit numbers (I will fix that tho)
// (other numbers will just be concatenated)
// (i warned you)
// (dont do it!!!!!)
// 
// ACTUALLY!!!
// NOT TRUE ANYMORE!!
// Because it works with all numbers now !!
// Everyone is included !!!!!!!!!
//
// More updates to come :>


// "Calculatrice."
// -Z