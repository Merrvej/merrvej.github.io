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
  }
  return arr;


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interest = percent / 100;
  let P = interest / 12;
  let S = amount - contribution;
  let totalMortgage = [];
  
  for (let i = 0; i <= countMonths; i++) {
    let n = countMonths - i;
    let payment = S * (P + (P / (((1 + P)**n) - 1)))
    totalMortgage.push(payment);
  }

  let totalMortgageSum = 0;

  for (let i = 0; i < totalMortgage.length; i++) {
    totalMortgageSum += totalMortgage[i];
  }

  let totalMortgageSumRounded = totalMortgageSum.toFixed(2);
}
  return totalMortgageSumRounded;
  console.log(parseFloat(totalMortgageSumRounded))
