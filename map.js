const numbers = [1, 2, 3, 4, 5, 6, 7];

const multiply = (arr, n) => arr.map((element, index) => element * n);

// console.log(multiply(numbers, 5));

// filtro de los números
const evenNumbers = arr => arr.filter((element, index) => element % 2 === 0);

//concatenación de array + filter
const multipleAndGetEvenNumber = () => (arr, n) =>
  arr
    .map((element, index) => element * n)
    .filter((element, index) => element % 2 === 0);

const sumOfAll = arr =>
  arr.reduce((accumulator, current) => accumulator + current, 0);

const doEverything = arr =>
  arr
    .map((element, index) => element * n)
    .filter((element, index) => element % 2 === 0)
    .reduce((accumulator, current) => accumulator + current, 0);

const foods = ["apple", "orange", "banana"];
// Ordenación básica de elementos (funcional solo para strings)
const sorted1 = arr => arr.sort();
console.log(sorted1(foods));

// Ordenación descendente de elementos (números)
const sorted2 = arr => arr.sort((a, b) => b - a);

// console.log(sorted2(numbers));

// ordenación "compleja" de elementos (tanto para número como strings)
const sorted3 = arr =>
  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
  });

// console.log(sorted(foods));
// console.log(sorted(numbers));
