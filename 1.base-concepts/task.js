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
    let x = Math.pow((1 + P), countMonths);
    let y = x - 1;
    let monthlyPayment = S * (P + (P / y));
    let totalMortgage = monthlyPayment * countMonths;
    let totalMortgageRounded = +totalMortgage.toFixed(2);
    console.log(totalMortgageRounded);
    return totalMortgageRounded;
  }
  
