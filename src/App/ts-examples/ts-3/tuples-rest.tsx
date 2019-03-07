console.log('--------------------------Tuples');
// Tuples
let product: [string, number];
product = ['Table', 500]; // in order as defined in the tuple
// wrong
// product = [500, 'Table'];
let flag: [string, boolean];
flag = ['disabled', false];
console.log(flag[1]);

product.forEach((element) => {
  console.log(element); // more readable
});

for (let element in product) {
  console.log(product[element]); // less readable
}
console.log('--------------------------Rest syntax');
// Rest syntax
function logScores(...scores: number[]) {
  console.log(scores);
}
logScores(50, 85, 75);

function logMoreScores(score1: number, score2: number, score3: number) {
  console.log(score1, score2, score3);
}
const scores = [75, 65, 80];
// wrong
// logMoreScores(...scores); // Error: Expected 3 arguments, but got 0 or more - use open ended tuple instead
type Scores = [string, ...number[]];
const billScores: Scores = ['Billy', 60, 70, 75];
const sallyScores: Scores = ['Sally', 60, 70, 75, 70];

console.log('--------------------------Tuple function parameters');
// Tuple function parameters - allow us to create stronly-typed rest parameters
type Ex2Type = [...number[]];
 function logScoresEx2(scores: Ex2Type) {
   console.log(scores);
 }
 logScoresEx2([50, 85, 75]);

function logNameAndScores(...scores: Scores) {
  console.log(scores);
}
logNameAndScores('Sally', 60, 70, 75, 70);

type MyScores = [...number[]]; // an array of numbers represented by a tuple
function consoleLogScores(scores: MyScores): void {
  console.log(scores);
}
consoleLogScores([50, 60, 70]);

function foo(scores: [...number[]]) {
  console.log(scores);
}
foo([1,2,3,4,5]);




export {};


