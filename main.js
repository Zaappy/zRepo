let input = ['1+2']; // input the expression here


input = input[0].split('');
var irray = [];
for (let inpDex = 0; inpDex < input.length; inpDex++) {
  const inp = input[inpDex];
  if (
    inp === '1' ||
    inp === '2' ||
    inp === '3' ||
    inp === '4' ||
    inp === '5' ||
    inp === '6' ||
    inp === '7' ||
    inp === '8' ||
    inp === '9' ||
    inp === '0'
  ) {
    irray.push(Number(inp));
  } else if (inp === '+') {
    input.splice(input.indexOf('+'), 1);
    var addition = true;
  } else if (inp === '-') {
    var subtraction = true;
  } else if (inp === '*') {
    var multiplication = true;
  } else if (inp === '/') {
    var division = true;
  }
}

if (addition) {
  console.log(irray[0] + irray[1]);
  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaa
}

// console.log(input);
// console.log(irray);
