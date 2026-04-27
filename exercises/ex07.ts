// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

function filterByType<T, U extends T>(items: T[], targetType: 'string' | 'number' | 'boolean'): U[] {
  const result: U[] = [];

  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === targetType) {
      result.push(items[i] as U);
    }
  }

  return result;
}

const mixed = [1, 'two', 3, 'four'] as (number | string)[];
const onlyStrings = filterByType<(number | string), string>(mixed, 'string');
console.log(onlyStrings);

const mixed2 = [true, 10, false, 20] as (boolean | number)[];
const onlyNumbers = filterByType<(boolean | number), number>(mixed2, 'number');
console.log(onlyNumbers);
