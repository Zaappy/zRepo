const input = '1+2'; // input the expression here


let irray;
irray = input.split('');

irray.forEach((el) => {
  if (el === '1' || el === '2' || el === '3' || el === '4' || el === '5' || el === '6' || el === '7' || el === '8' || el === '9' || el === '0') {
    console.log(Number(el));
  } else if (el === '+') {
    // guh3
  } else {
    // .ghuhg
  }
});
