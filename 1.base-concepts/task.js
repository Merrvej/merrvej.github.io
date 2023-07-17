"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
    return(arr);
  } else if 
    (d === 0) {
      arr.push(-b/(2*a));
    } else {
      arr.push((-b + Math.sqrt(d) )/(2*a));
      arr.push((-b - Math.sqrt(d) )/(2*a));
    }
    return arr;
  }



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interest = percent / 100;
  let P = interest / 12;
  let S = amount - contribution;
  let totalMortgage;
  
  for (let i = 1; i <= countMonths; i++) {
    let n = countMonths - i;
    let x = Math.pow((1 + P), n);
    let y = +x.toFixed(2) - 1;
    let monthlyPayment = S * (P + (P / y))
    totalMortgage += monthlyPayment;
  }
  return totalMortgage;
}
  console.log(+totalMortgage.toFixed(2));
