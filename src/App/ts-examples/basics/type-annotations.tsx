// Type annotations
let unitPrice: number;
console.log('--------------------------');
// wrong
// unitPrice = 'Table';

function getTotal(unitPrice: number, quantity: number, discount: number): number {
  const priceWithoutDiscount = unitPrice * quantity;
  const discountAmount = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}

// wrong
// let total: string = getTotal(500, 'one', 0.1);
console.log('--------------------------');
// Type inference
let flag = false;
// wrong
// flag = 'table';

let foo;

// type void by type inference
function logText(text: string) {
  console.log(text);
}

// type never
function foreverTask(taskName: string): never {
  // don't do this
  while(true) {
    console.log(`Doing ${taskName} over and over again ...`);
    // break; // <-- turn this on to see how TS raises and error
  }
}
console.log('--------------------------');
// Enumerations
enum OrderStatus {
  Paid = 1,
  Shipped,
  Completed,
  Cancelled
}
// gets intellisense
let status = OrderStatus.Shipped;
console.log(status); // returns the index

enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}
let myHeading = HeadingLevels.h3;
console.log(myHeading); // returns 'h3'

enum BaseSizes {
  m = 'm',
  l = 'l',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl'
}
let myBaseSize = BaseSizes["3xl"]; // keys that start with a number can be referenced like this
myBaseSize = BaseSizes.m; // keys that start with 'normal' characters can be referenced like this or the array index syntax ["m"]
console.log(myBaseSize);
console.log('--------------------------');
// Objects
const customer = {
  name: 'Lamps Ltd',
  turnover: 2000134,
  active: true
};
customer.turnover = 50000;
console.log('--------------------------');
// Arrays
const numbers: number[] = [];
numbers.push(1);
// wrong
// numbers.push('two');

const inferredNumberArray = [1,2,3];
console.log(inferredNumberArray[0]);
console.log(inferredNumberArray[1]);
console.log(inferredNumberArray[2]);

// https://stackoverflow.com/a/41975448/4118955
export {};
