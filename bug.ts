function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null && obj2 === null) {
    return true;
  }
  if (obj1 === null || obj2 === null) {
    return false;
  }

  // Check if both objects have the same number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compare the values of each key
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 2, c: 4 };
const obj5 = { a: 1, b: 2, c: 3, d: 4 };

console.log(compareObjects(obj1, obj2)); // true
console.log(compareObjects(obj1, obj3)); // false
console.log(compareObjects(obj1, obj4)); // false
console.log(compareObjects(obj1, obj5)); // false
console.log(compareObjects(null, null)); // true
console.log(compareObjects(obj1, null)); // false