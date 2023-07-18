function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    
    if (arr[i] > max) {
      max = arr[i];
    };
    
    if (arr[i] < min) {
      min = arr[i];
    };

    sum += arr[i];
  };

  let average = (sum / arr.length);
  let avg = +average.toFixed(2);
  console.log(avg);

  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr == '') {
    return sum;
  } else {

    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {

  let diffMinMax = 0;

  if (arr == '') {
    return diffMinMax;
  } else {
    let min = Infinity;
    let max = -Infinity;

    for (i = 0; i < arr.length; i++) {
    
      if (arr[i] > max) {
        max = arr[i];
      };
    
      if (arr[i] < min) {
        min = arr[i];
      };
    };

    diffMinMax = max - min;
    return diffMinMax;
  };
}

function differenceEvenOddWorker(...arr) {

  if (arr == '') {
    let diffOddEven = 0;
    return diffOddEven;
  } else {
    let evenSum = 0;
    let oddSum = 0;

    for (i = 0; i < arr.length; i++) {

      if (arr[i] % 2 === 0) {
        evenSum += arr[i];
      } else {
        oddSum += arr[i];
      }
    };

    let diffOddEven = evenSum - oddSum;
    return diffOddEven;
  }
}

function averageEvenElementsWorker(...arr) {

  if (arr == '') {
    let evenSumNumberRatio = 0;
    return evenSumNumberRatio;
  } else {
    let evenElementSum = 0;
    let evenElementNumber = 0;
  
    for(i=0; i < arr.length; i++) {
  
      if (arr[i] % 2 === 0) {
        evenElementSum += arr[i];
        evenElementNumber++;
      };
    }
  
    let evenSumNumberRatio = evenElementSum / evenElementNumber;
    return evenSumNumberRatio;
  }
}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = arrOfArr[0][0];

  for (i = 0; i < arrOfArr.lehgth; i++) {

    func(arrOfArr[i])

    if (func(arrOfArr[i]) > maxWorkerResult) {
      maxWorkerResult = func(arrOfArr[i]);
    };
  };

  return maxWorkerResult;
}
