// Задание 1
const array1 = [10, 15, 20];

let sum = 0;
let setAvg = 0 ;

function getArrayParams(arr) {
  const array = arr;
  const min = arr => arr.reduce((x, y) => Math.min(x, y));
  const max = arr => arr.reduce((x, y) => Math.max(x, y)); 
  const avg = arr => {
    for (let position in array) {
    sum += array[position];
    }
    setAvg = sum / array.length;
    return Number(setAvg);
  }

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  arrOfArray = arr;
  for (let i = 0; i < arrOfArray.legnth; i++) {
    for (let x = 0; x <arrOfArray[x].legnth; x++){
      sum += arrOfArray[i][x];
    }
  }
  console.log(sum);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
