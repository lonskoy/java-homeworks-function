// Задание 1

function getArrayParams(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const avg1 = arr.reduce((acc, item) => acc += item);
  const avg = Number((avg1 / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


// Задание 2

function worker(arr) {
  
  return arr.reduce((acc, item) => acc += item, 0);

}

function makeWork(arr, func) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
    if (func > max) {max = func}
  return max;
  }
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
