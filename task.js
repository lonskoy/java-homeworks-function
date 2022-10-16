// Задание 1
const array1 = [10, 15, 20];

function getArrayParams(arr) {
  const min = arr.reduce((x) => Math.min(x));
  const max = arr.reduce((x, y) => Math.max(x, y)); 
  const avg = arr.reduce((acc, item, index, arr) => {
      acc += item;
      if (index === arr.length -1) {
          return acc / arr.length;
      }
      return acc;
  }, 0)

  return { min: min, max: max, avg: avg };
}


// Задание 2

var sum = 0;

function worker(arr) {
  arr.forEach(function(value, index) {
    Array.isArray(value) ? worker(value) : sum += value; 
  });

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
