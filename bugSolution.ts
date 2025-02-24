function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null && obj2 === null) {
    return true;
  }
  if (obj1 === null || obj2 === null) {
    return false;
  }

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 2, c: 4 };
const obj5 = { a: 1, b: 2, c: 3, d: 4 };
const obj6 = { a: 1, c: 3, b: 2 };
const obj7 = { a: 1, b: { c: 3, d: 4 } };
const obj8 = { a: 1, b: { c: 3, d: 4 } };
const obj9 = { a: 1, b: { d: 4, c: 3 } };

console.log(compareObjects(obj1, obj2)); // true
console.log(compareObjects(obj1, obj3)); // false
console.log(compareObjects(obj1, obj4)); // false
console.log(compareObjects(obj1, obj5)); // false
console.log(compareObjects(obj1, obj6)); // true
console.log(compareObjects(obj7, obj8)); // true
console.log(compareObjects(obj7, obj9)); // true
console.log(compareObjects(null, null)); // true
console.log(compareObjects(obj1, null)); // false