// console.log(1 + 1);
// NO I WONT
// I WANT TO OVERTHINK THIS AS MUCH AS POSSIBLE
// :D !!!!!!!!!!!!!!!!!!!!!!!!!!!


// Input the expression here.
let input = ['1 + 1']; 
// (currently only functions with single-digit numbers) ({[I will fix that tho]})
// (other numbers will just be concatenated)
// (i warned you)
// (dont do it!!!!!)



// cod e
let addition;
let subtraction;
let multiplication;
let division;
input = input[0].split(' ');
input.forEach((element) => {
  if (
    element === '1' ||
    element === '2' ||
    element === '3' ||
    element === '4' ||
    element === '5' ||
    element === '6' ||
    element === '7' ||
    element === '8' ||
    element === '9' ||
    element === '0'
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
